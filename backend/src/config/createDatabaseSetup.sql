-- This file is used to create the database and tables for the application to use. 
-- It is run by docker-compose when the application is started for the first time.

CREATE TABLE IF NOT EXISTS users(
      ID SERIAL PRIMARY KEY, 
      username VARCHAR(32) NOT NULL UNIQUE, 
      password VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL UNIQUE,
      name VARCHAR(64) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE SEQUENCE IF NOT EXISTS users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE sessions (
  session_id VARCHAR(100) PRIMARY KEY,
  user_id VARCHAR(32) REFERENCES users(username),
  user_ip VARCHAR(50) NOT NULL,
  browser VARCHAR(50) NOT NULL,
  browser_version VARCHAR(50) NOT NULL,
  os VARCHAR(50) NOT NULL,
  os_version VARCHAR(50) NOT NULL,
  expiration_timestamp TIMESTAMP NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);