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