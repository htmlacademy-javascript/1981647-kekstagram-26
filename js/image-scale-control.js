const STEP = 0.25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleDownButtonElement = document.querySelector('.scale__control--smaller');
const scaleUpButtonElement = document.querySelector('.scale__control--bigger');
const imageScaleInputElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview');

const onScaleButtonClick = (limit, isIncrease) => {
  const scaleNumber = parseInt(imageScaleInputElement.value, 10);

  if (scaleNumber !== limit) {
    imageScaleInputElement.value = isIncrease ? `${scaleNumber + (STEP * 100)}%` : `${scaleNumber - (STEP * 100)}%`;
    imagePreviewElement.style.transform = isIncrease ? `scale(${scaleNumber / 100 + STEP})` : `scale(${scaleNumber / 100 - STEP})`;
  }
};

const imageScaleControl =  () => {

  scaleDownButtonElement.addEventListener('click', () => {
    onScaleButtonClick(MIN_SCALE, false);
  });

  scaleUpButtonElement.addEventListener('click', () => {
    onScaleButtonClick(MAX_SCALE, true);
  });
};


export { imageScaleControl };


