import { hashtagsChecker, error } from './hashtags.js';

const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInputElement = uploadForm.querySelector('#upload-file');
const editFormElement = uploadForm.querySelector('.img-upload__overlay');
const closeFormButtonElement = uploadForm.querySelector('#upload-cancel');
const hashtagInputElement = uploadForm.querySelector('.text__hashtags');
const descriptionInputElement = uploadForm.querySelector('.text__description');
const submitButtonElement = uploadForm.querySelector('.img-upload__submit');

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
    if (document.activeElement !== hashtagInputElement && document.activeElement !== descriptionInputElement){
      closeUploadImageForm();
    }
  }
}

function clearValue(node) {
  node.value = '';
}

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const onHashtagInput = () => {
  if (pristine.validate()) {
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.disabled = true;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    uploadForm.submit();
  } else {
    submitButtonElement.disabled = true;
  }
};

const formValidation = () => {
  pristine.addValidator(hashtagInputElement, hashtagsChecker, error, 2, false);
  hashtagInputElement.addEventListener('input', onHashtagInput);
  uploadForm.addEventListener('submit', onFormSubmit);
};

export { uploadImageForm, formValidation };
