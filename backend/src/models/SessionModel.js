const db = require("../database/database");
const generateSessionUID = require("../utils/generateSessionUID");

class SessionClass {
  static sessionList = [];

  constructor({
    userId,
    userIP,
    browser,
    browserVersion,
    os,
    osVersion,
    expirationTimestamp,
  }) {
    this.sessionId = generateSessionUID();
    this.userId = userId;
    this.userIP = userIP;
    this.browser = browser;
    this.browserVersion = browserVersion;
    this.os = os;
    this.osVersion = osVersion;

    this.expirationTimestamp = expirationTimestamp;
    SessionClass.sessionList.push(this);
  }

  static async checkSession(sessionId) {
    const session = SessionClass.sessionList.find((session) => {
      return session.sessionId === sessionId;
    });

    if (session) {
      return session;
    } else {
      //check if session is in database and if its not expired
      const query = `SELECT * FROM sessions WHERE session_id = $1 AND expiration_timestamp > NOW() AND is_active = true`;
      const params = [sessionId];

      const result = await db.query(query, params);
      if (result.rows?.length > 0) {
        // Create a new session instance
        const session = new SessionClass({
          userId: result.rows?.[0]?.user_id,
          userIP: result.rows?.[0]?.user_ip,
          browser: result.rows?.[0]?.browser,
          browserVersion: result.rows?.[0]?.browser_version,
          os: result.rows?.[0]?.os,
          osVersion: result.rows?.[0]?.os_version,
          expirationDate: result.rows?.[0]?.expiration_timestamp,
        });
        return result.rows?.[0]?.session_id;
      } else {
        return false;
      }
    }
  }

  static async saveSession(session) {
    const query = `
      INSERT INTO sessions (session_id, user_id, user_ip, browser, browser_version, os, os_version, expiration_timestamp, is_active)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true)
    `;
    const params = [
      session.sessionId,
      session.userId,
      session.userIP,
      session.browser,
      session.browserVersion,
      session.os,
      session.osVersion,
      session.expirationTimestamp,
    ];

    try {
      return await db.query(query, params);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    // Make the session inactive in the database
    const query = `UPDATE sessions SET is_active = false WHERE session_id = $1`;
    const params = [this.sessionId];
    await db.query(query, params);

    // Remove the session from the sessionList array
    const index = SessionClass.sessionList.indexOf(this);
    SessionClass.sessionList.splice(index, 1);
    // Destroy the session instance
    delete this;
  }
}

module.exports = SessionClass;
