const http = require("http");
const app = require("../../index");

describe("Error Handler", () => {
  it("should return a 404 status code and the correct body if the route is not found", (done) => {
    http
      .request(
        "http://localhost:3001/",
        {
          method: "GET",
          path: "/non-existent-route",
          headers: { Accept: "application/json" },
        },
        (response) => {
          expect(response.statusCode).toBe(404);
          expect(response.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
          );
          let responseData = "";
          response.on("data", (chunk) => {
            responseData += chunk;
          });
          response.on("end", () => {
            expect(JSON.parse(responseData)).toEqual({
              error: "Not found",
              status: 404,
            });
            done();
          });
        }
      )
      .end();
  });
});
