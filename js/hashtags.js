const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;

//заводим переменную, чье значение может изменяться
let errorMessage = '';
//записываем в функцию
const error = () => errorMessage;

const hashtagsChecker = (value) => {
  errorMessage = '';

  //убираем пробелы и переводим данные в один регистр
  const inputText = value.toLowerCase().trim();
  //если поле пустое, то пропускаем валидацию
  if (!inputText) {
    return true;
  }
  //деление на хэш-теги по пробелу
  const inputArray = inputText.split(/\s+/);
  //проверяем длину массива
  if (inputArray.length === 0) {
    return true;
  }

  const checkFormValidation = [
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги разделяются пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `максимальная длина одного хэш-тега ${MAX_SYMBOLS} символов, включая решетку`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя указать больше ${MAX_HASHTAGS} хэш-тегов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы',
    },
  ];


  return checkFormValidation.every((rule) => {
    const isInvalid = rule.check; //проверяем на правила
    if (isInvalid) {
      errorMessage = rule.error; //присваиваем текст ошибки
    }
    return !isInvalid;
  });
};

export { hashtagsChecker, error };
