// написать функцию, которая будет выбирать правильное склонение существительного после числительного
const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  // решение
  num = Math.abs(num);
  num = num % 100;
  if (num > 20) {
    num = num % 10;
  }

  if (num >= 5 && num <= 20 || num === 0) {
    return num + genitivePlural;
  }

  if (num >= 2 && num <= 4) {
    return num + genitiveSingular;
  }

  if (num === 1) {

    return num + nominative;
  }

};


numDecline(12, 'гость', 'гостя', 'гостей'); // гостей

//число сокращаем до десятка
//проверяем по диапозонам 1, 2-4, 5 - 20, и больше 20
//
