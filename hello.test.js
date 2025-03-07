const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the LH 762 FROM MUNICH TO DELHI !!");
  });
});
