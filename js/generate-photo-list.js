import {getRandomInt} from './get-random-int.js';

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Всё отлично! Курорты',
  'Пляжи и пески.',
  'Квартира. В конце концов это просто непрофессионально.',
  'Живописненько.',
  'Закаты и горы.',
  'Перекосило',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

let commentIdCounter = 1;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: shuffleArray(COMMENT_MESSAGES).slice(0, getRandomInt(1, COMMENT_MESSAGES.length)),
  name: getRandomArrayElement(NAMES),
});

const generatePhotoList = () => {
  const result = [];
  for (let i = 1; i <= 25; i++) {
    result.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomInt(15, 200),
      comments: Array.from({ length: getRandomInt(1, 10) }, generateComment)
    });
  }

  return result;
};

export { generatePhotoList };

