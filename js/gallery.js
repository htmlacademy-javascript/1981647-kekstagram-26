import { generatedPhotoList } from './generate-photo-list.js';
import { showBigPicture, hideBigPicture } from './gallery-preview.js';

const displayPicture = () => {
  const picturesSectionNode = document.querySelector('.pictures');
  const pictureTemplate = document.getElementById('picture').content.querySelector('.picture');
  const picturesListFragment = document.createDocumentFragment();
  const closeBigPictureButtonElement = document.getElementById('picture-cancel');

  closeBigPictureButtonElement.addEventListener('click', () => {
    hideBigPicture();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      hideBigPicture();
    }
  });

  generatedPhotoList.forEach((element) => {
    const pictureClone = pictureTemplate.cloneNode(true);
    const imageElement = pictureClone.querySelector('.picture__img');
    const likesElement = pictureClone.querySelector('.picture__likes');
    const commentsElement = pictureClone.querySelector('.picture__comments');

    commentsElement.textContent = element.comments.length;
    likesElement.textContent = element.likes;
    imageElement.src = element.url;

    pictureClone.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(element);
    });

    picturesListFragment.appendChild(pictureClone);
  });
  picturesSectionNode.appendChild(picturesListFragment);
};

export { displayPicture };
