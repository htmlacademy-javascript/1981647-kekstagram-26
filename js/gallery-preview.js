const createCommentNodes = (comments, commentTemplate) => {
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

const showBigPicture = (element) => {
  const bigPictureNode = document.querySelector('.big-picture');
  const imageElement = bigPictureNode.querySelector('.big-picture__img img');//gets to image tag
  const likesElement = bigPictureNode.querySelector('.likes-count');
  const descriptionElement = bigPictureNode.querySelector('.social__caption');
  const commentsCountElement = bigPictureNode.querySelector('.comments-count');
  const commentsListNode = bigPictureNode.querySelector('.social__comments');// list
  const commentTemplate = commentsListNode.querySelector('.social__comment');// li

  imageElement.src = element.url;
  likesElement.textContent = element.likes;
  commentsCountElement.textContent = element.comments.length;
  descriptionElement.textContent = element.description;

  const commentElements = createCommentNodes(element.comments, commentTemplate);
  commentsListNode.replaceChildren(...commentElements);
  bigPictureNode.classList.remove('hidden');//show modal window
  bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureNode.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
};

const hideBigPicture = () => {
  document.querySelector('.big-picture').classList.add('hidden');// hides modal window
  document.body.classList.remove('modal-open');
};


export { showBigPicture, hideBigPicture };
