const db = require("../database/database");
const bcrypt = require("bcrypt");

class User {
  constructor(user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.name = user.name;
  }

  async cryptUserPassword() {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      console.log("Error while hashing the password" + err);
    }
  }

  async compareUserPassword(password) {
    try {
      return await bcrypt.compare(this.password, password);
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
    const result = await db.query(query, params);
    return result.rows[0];
  }
}

module.exports = User;
