const getRandomInt = (min, max) => {
  if (max <= min) {
    return -1;
  }

  if (min < 0 || max < 0) {
    [min, max] = [max, min];
  }

  const range = max - min + 1;
  return Math.floor(Math.random() * (range)) + min;
};

getRandomInt(10, 11);

export {getRandomInt};
