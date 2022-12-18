const User = require("../../src/models/User");

describe("New user registration and login", () => {
  const random_username = "test" + Math.random().toString(36).substring(2, 15);
  const user = User.create({
    username: random_username,
    password: "test",
    email: "test" + Math.random().toString(36).substring(2, 15) + "@test.com",
    name: "test",
  });

  it("should register a new user", async () => {
    var result = await user.register();
    expect(result.username).toBe(random_username);
  });

  it("shoud not register a new user with the same username", async () => {
    const user_sameusername = User.create({
      username: random_username,
      password: "test",
      email: "test" + Math.random().toString(36).substring(2, 15) + "@test.com",
      name: "test",
    });
    try {
      var result = await user_sameusername.register();
      //if no error is thrown, the test fails
      expect(result).toBeInstanceOf(Error);
    } catch (err) {
      //check if error is a duplicate key error
      expect(err.code).toBe("23505");
      expect(err.constraint).toBe("users_username_key");
    }
  });

  it("should login the new user", async () => {
    try {
      user.password = "test"; //reset password to the original value for login test
      var result = await user.login();
      expect(result).not.toBeInstanceOf(Error);
    } catch (err) {
      //if error is thrown, the test fails
      expect(err).not.toBeInstanceOf(Error);
    }
  });
});
