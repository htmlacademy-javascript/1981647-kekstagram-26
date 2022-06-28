import { generatedPhotoList } from './generate-photo-list.js';

const displayPicture = () => {
  const picturesSection = document.querySelector('.pictures');
  const pictureTemplate = document.getElementById('picture').content;
  const picturesListFragment = document.createDocumentFragment();

  generatedPhotoList.forEach((element) => {
    const pictureClone = pictureTemplate.cloneNode(true);
    const image = pictureClone.querySelector('.picture__img');
    const likes = pictureClone.querySelector('.picture__likes');
    const comments = pictureClone.querySelector('.picture__comments');

    comments.textContent = element.comments.length;
    likes.textContent = element.likes;
    image.src = element.url;

    picturesListFragment.appendChild(pictureClone);
  });
  picturesSection.appendChild(picturesListFragment);
};

export { displayPicture };
