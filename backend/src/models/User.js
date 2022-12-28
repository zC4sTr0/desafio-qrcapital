const db = require("../database/database");
const bcrypt = require("bcrypt");

class User {
  constructor({ username, password, email, name }) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
  }

  async cryptUserPassword() {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      console.log("Error while hashing the password" + err);
      return err;
    }
  }

  async compareUserPassword(encryptedPassword) {
    try {
      return await bcrypt.compare(this.password, encryptedPassword);
    } catch (err) {
      return false;
    }
  }

  async login() {
    try {
      const query = `SELECT * FROM users WHERE username = $1`;
      const params = [this.username];
      const result = await db.query(query, params);

      if (result.rows.length > 0) {
        const user = result.rows?.[0];
        const isMatch = await this.compareUserPassword(user.password);
        if (isMatch) {
          return { status: 200, message: "OK", user: user };
        } else {
          return {
            message: "Wrong username and password combination",
            status: 401,
          };
        }
      } else {
        return { message: "Invalid username", status: 401 };
      }
    } catch (err) {
      return err;
    }
  }

  static create(user) {
    return new User(user);
  }

  async register() {
    await this.cryptUserPassword();
    const query = `
        INSERT INTO users (ID, username, password, email, name) 
        VALUES (nextval('users_id_seq'), $1, $2, $3, $4) RETURNING *;
        `;
    const params = [this.username, this.password, this.email, this.name];
    try {
      const result = await db.query(query, params);
      return result.rows?.[0];
    } catch (err) {
      return err;
    }
  }
  //check if username already exists
  static async checkUsernameAvaiable(username) {
    const query = `SELECT * FROM users WHERE username = $1`;
    const params = [username];
    const result = await db.query(query, params);
    if (result.rows?.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  //check if email already exists
  static async checkEmailAvaiable(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    const result = await db.query(query, params);
    if (result.rows?.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  static async getUserCoins(username) {
    const query = `SELECT id, symbol, added_at FROM usercoins WHERE username = $1`;
    const params = [username];
    const result = await db.query(query, params);

    const userCoins = result.rows.map((row) => ({
      coinId: row.id,
      coinSymbol: row.symbol,
      username: username,
      added_at: row.added_at,
    }));

    return userCoins;
  }

  //add new coin to user's coin list
  static async addCoin(coinId, coinSymbol, username) {
    const query = `
      INSERT INTO usercoins (id, symbol, username)
      VALUES ($1, $2, $3)
      RETURNING id, symbol, added_at
    `;
    const params = [coinId, coinSymbol, username];

    try {
      const result = await db.query(query, params);
      if (result.rows?.length > 0) {
        // If the coin was successfully added, get the updated list of coins for the user
        const userCoins = this.getUserCoins(username);
        return userCoins;
      } else {
        // If the coin was not added, return false
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  static async deleteCoin(coinId, coinSymbol, username) {
    const query = `
      DELETE FROM usercoins
      WHERE id = $1 AND symbol = $2 AND username = $3
      RETURNING id, symbol, added_at
    `;
    const params = [coinId, coinSymbol, username];

    try {
      const result = await db.query(query, params);
      if (result.rows?.length > 0) {
        // If the coin was successfully deleted, get the updated list of coins for the user
        const userCoins = this.getUserCoins(username);
        return userCoins;
      } else {
        // If the coin was not deleted, return false
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

module.exports = User;
