const NUMBER_OF_COMMENTS = 5;
const bigPictureNode = document.querySelector('.big-picture');
const imageElement = bigPictureNode.querySelector('.big-picture__img img');//gets to image tag
const likesElement = bigPictureNode.querySelector('.likes-count');
const descriptionElement = bigPictureNode.querySelector('.social__caption');
const commentsCountElement = bigPictureNode.querySelector('.comments-count');
const renderedCommentsCountElement = bigPictureNode.querySelector('.rendered-comments-count'); //span with number of comments
const moreCommentsButtonElement = bigPictureNode.querySelector('.comments-loader'); //button to load more comments
const commentsListNode = bigPictureNode.querySelector('.social__comments');// list
const commentTemplate = commentsListNode.querySelector('.social__comment');// li
let allComments = [];
let renderedCommentsCount = 0;

const createCommentNodes = (comments) => {
  const commentElements = comments.map((comment) => { //array of comments
    const commentElement = commentTemplate.cloneNode(true);// copy of li
    const commentAvatarElement = commentElement.querySelector('.social__picture');
    const commentTextElement = commentElement.querySelector('.social__text');
    commentAvatarElement.src = comment.avatar;
    commentAvatarElement.alt = comment.name;
    commentTextElement.textContent = comment.message;
    return commentElement;
  });
  return commentElements;
};

const renderComments = () => {
  const commentsToShow = allComments.slice(renderedCommentsCount, NUMBER_OF_COMMENTS + renderedCommentsCount);
  renderedCommentsCount = renderedCommentsCount + commentsToShow.length;
  renderedCommentsCountElement.textContent = renderedCommentsCount;
  const allCommentsCount = allComments.length;

  if (renderedCommentsCount === allCommentsCount) {
    moreCommentsButtonElement.classList.add('hidden');
  }
  const commentElements = createCommentNodes(commentsToShow);
  commentsListNode.append(...commentElements);
};

const onMoreCommentsButtonLoad = () => {
  renderComments();
};

const showBigPicture = ({ url, likes, comments, description }) => {
// Filling with data from params
  imageElement.src = url;
  likesElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  descriptionElement.textContent = description;
  commentsListNode.innerHTML = ''; //clears comments
  moreCommentsButtonElement.classList.remove('hidden');
  allComments = comments;
  renderedCommentsCount = 0;

  renderComments();

  bigPictureNode.classList.remove('hidden'); //show modal window
  document.body.classList.add('modal-open');

  moreCommentsButtonElement.addEventListener('click', onMoreCommentsButtonLoad);

  document.addEventListener('keydown', onEscapeClick);
};

const hideBigPicture = () => {
  document.querySelector('.big-picture').classList.add('hidden');// hides modal window
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeClick);
};


function onEscapeClick(evt) {
  if (evt.code === 'Escape') {
    hideBigPicture();
  }
}

export { showBigPicture, hideBigPicture, onEscapeClick };
