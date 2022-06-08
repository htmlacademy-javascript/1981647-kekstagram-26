function getRandomInt (min, max) {
  if (max <= min) {
    throw new Error('Введите число больше минимального');
  }

  if (min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным');
  }

  const range = max - min + 1;
  return Math.floor(Math.random() * (range)) + min;


}

getRandomInt(10, 11);

function isMaxAllowedStringLength(string, maxLength) {
  return string.length <= maxLength;
}

isMaxAllowedStringLength('Vicka', 5);
