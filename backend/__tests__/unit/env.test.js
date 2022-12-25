// test to check if env file exists and if env variables are set

const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const rootPath = path.resolve();
const envPath = path.join(rootPath, ".env");

describe(" test to check if env file exists in root path and if env variables are set", () => {
  dotenv.config();
  it("should check if env file exists in root path", () => {
    expect(fs.existsSync(envPath)).toBe(true);
  });

  it("should check if env variables are set", () => {
    // Check that the DATABASE_HOST environment variable is set
    expect(process.env.database_host).toBeDefined();

    // Check that the DATABASE_PORT environment variable is set
    expect(process.env.database_port).toBeDefined();

    // Check that the DATABASE_USERNAME environment variable is set
    expect(process.env.database_user).toBeDefined();

    // Check that the DATABASE_PASSWORD environment variable is set
    expect(process.env.database_password).toBeDefined();

    // Check that the DATABASE_NAME environment variable is set
    expect(process.env.database_name).toBeDefined();
  });
});
