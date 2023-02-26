const randNums = () => {
  const numbersArr = [];

  while (numbersArr.length < 7) {
    const randNum = Math.floor(Math.random() * 35) + 1;

    if (!numbersArr.includes(randNum)) {
      numbersArr.push(randNum);
    }
  }

  return numbersArr.sort((a, b) => a - b);
};

export default randNums;