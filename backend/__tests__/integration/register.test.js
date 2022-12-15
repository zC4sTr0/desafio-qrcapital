const User = require("../../src/models/user");

describe("Registration", () => {
  it("should register a new user", async () => {
    const user = new User({
      username: "test" + Math.random().toString(36).substring(2, 15),
      password: "test",
      email: "test@test.com",
      name: "test",
    });
    console.log(user);
    expect(user.email).not.toBe(null);
  });
});
