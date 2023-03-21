const add = require("./add");

describe("add", () => {
  it("adds multiple numbers", () => {
    const someString = '1,2,3'; 


    expect(add(someString)).toEqual(6)
  })
})