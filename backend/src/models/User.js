const db = require("../database/database");

class User {
  constructor(user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.name = user.name;
  }

  static create(user) {
    return new User(user);
  }

  async save() {
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
