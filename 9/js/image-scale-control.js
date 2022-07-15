const STEP = 0.25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleDownButtonElement = document.querySelector('.scale__control--smaller');
const scaleUpButtonElement = document.querySelector('.scale__control--bigger');
const imageScaleValue = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview');

const imageScaleControl =  () => {

  scaleDownButtonElement.addEventListener('click', () => {
    // eslint-disable-next-line radix
    const scaleNumber = parseInt(imageScaleValue.value.slice(0, -1));

    if (scaleNumber !== MIN_SCALE) {
      imageScaleValue.value = `${scaleNumber - (STEP * 100)}%`;
      imagePreviewElement.style.transform = `scale(${scaleNumber / 100 - STEP})`;
    }
  });

  scaleUpButtonElement.addEventListener('click', () => {
    // eslint-disable-next-line radix
    const scaleNumber = parseInt(imageScaleValue.value.slice(0, -1));

    if (scaleNumber !== MAX_SCALE) {
      imageScaleValue.value = `${scaleNumber + (STEP * 100)}%`;
      imagePreviewElement.style.transform = `scale(${scaleNumber / 100 + STEP})`;
    }
  });
};


export { imageScaleControl };


