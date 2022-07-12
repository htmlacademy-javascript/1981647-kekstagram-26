const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInput = document.querySelector('#upload-file');
const editFormElement = document.querySelector('.image-upload__overlay');

const uploadFormImage = () => {
  uploadFileInput.addEventListener('change', () => {
    editFormElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
};


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

export { uploadFormImage };
