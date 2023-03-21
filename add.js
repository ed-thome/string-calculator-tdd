const add = (inputString) => {
  const inputInt = +inputString; //failure case?
  if(inputInt < 0) {
    throw new Error("negatives not allowed");
  }

  return inputInt;
};

module.exports = add;