
const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInputElement = uploadForm.querySelector('#upload-file');
const editFormElement = uploadForm.querySelector('.img-upload__overlay');
const closeFormButtonElement = uploadForm.querySelector('#upload-cancel');
const hashtagInputElement = uploadForm.querySelector('.text__hashtags');
const descriptionInputElement = uploadForm.querySelector('.text__description');

const closeUploadImageForm = () => {
  editFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearValue(uploadFileInputElement);
  clearValue(hashtagInputElement);
  clearValue(descriptionInputElement);


  document.removeEventListener('keydown', onEscapeClick);
};

const uploadImageForm = () => {
  uploadFileInputElement.addEventListener('change', () => {
    editFormElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscapeClick);
  });

  closeFormButtonElement.addEventListener('click', () => {
    closeUploadImageForm();
  });
};

function onEscapeClick(evt) {
  if (evt.code === 'Escape') {
    closeUploadImageForm();
  }
}

function clearValue(node) {
  node.value = '';
}

const pristine = new Pristine(uploadForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});


pristine.addValidator(uploadForm.querySelector('#nickname'));


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { uploadImageForm };
