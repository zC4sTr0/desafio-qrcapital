const User = require("../../src/models/User");

describe("Registration", () => {
  it("should register a new user", async () => {
    const user = User.create({
      username: "test" + Math.random().toString(36).substring(2, 15),
      password: "test",
      email: "test" + Math.random().toString(36).substring(2, 15) + "@test.com",
      name: "test",
    });
    console.log(user);
    var result = await user.save();
    console.log(result);
    expect(result).not.toBe(null);
    expect(user.email).not.toBe(null);
  });
});
