export const skandinavLotto = () => {
  const numbersArr = [];

  while (numbersArr.length < 7) {
    const randNum = Math.floor(Math.random() * 35) + 1;

    if (!numbersArr.includes(randNum)) {
      numbersArr.push(randNum);
    }
  }

  return numbersArr.sort((a, b) => a - b);
};

export const otosLotto = () => {
  const numbersArr = [];

  while (numbersArr.length < 5) {
    const randNum = Math.floor(Math.random() * 90) + 1;

    if (!numbersArr.includes(randNum)) {
      numbersArr.push(randNum);
    }
  }

  return numbersArr.sort((a, b) => a - b);
}

export const hatosLotto = () => {
  const numbersArr = [];

  while (numbersArr.length < 6) {
    const randNum = Math.floor(Math.random() * 45) + 1;

    if(!numbersArr.includes(randNum)) {
      numbersArr.push(randNum);
    }
  }

  return numbersArr.sort((a, b) => a - b);
}