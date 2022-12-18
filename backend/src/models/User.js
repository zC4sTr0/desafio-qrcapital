const db = require("../database/database");
const bcrypt = require("bcrypt");

class User {
  constructor(user) {
    this.username = user.username;
    this.password = user.password;
    if (user.email) this.email = user.email;
    if (user.name) this.name = user.name;
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
        const user = result.rows[0];
        const isMatch = await this.compareUserPassword(user.password);
        if (isMatch) {
          return user;
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
      console.log("Error while login" + err);
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
      return result.rows[0];
    } catch (err) {
      return err;
    }
  }
}

module.exports = User;
