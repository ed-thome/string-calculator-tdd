const add = require("./add");

describe("add", () => {
  it("empty string returns 0", () => {
    const someString = ''; 


    expect(add(someString)).toEqual(0)
  });

  it("should return a single value", () => {
    const singleValue = '2';

    expect(add(singleValue)).toEqual(2);

  });

  it("should throw exception for negative number", ()=> {
    const singleValue = '-3';

    expect(add(singleValue)).toThrow("negatives not allowed")

  });

})