const findElement = selector => document.querySelector(selector);

const getElementById = id => document.getElementById(id);

const onClick = (element, callback) => {
  // handler to prevent type error: Cannot read property 'addEventListener' of null
  if (element) {
    element.addEventListener('click', callback);
  }
};

const onBlur = (element, callback) => {
  if (element) {
    element.addEventListener('blur', callback);
  }
};

const closePopupAndRedirectTo = (page) => {
  findElement('.bg-modal').style.display = 'none';
  document.location.href = page;
};

const showPopupWithMessage = (message, displayState) => {
  findElement('.modal-message').textContent = message;
  findElement('.bg-modal').style.display = displayState;
};

onClick(getElementById('btn-rm'), () => {
  showPopupWithMessage('Are you sure?', 'flex');
});

onClick(findElement('#agree'), () => {
  closePopupAndRedirectTo('/posts');
});

onClick(findElement('#disagree'), () => {
  closePopupAndRedirectTo('/posts/postId');
});

// Edit button

onClick(getElementById('btn-edt'), () => {
  getElementById('btn-back-to-posts').style.display = 'none';
  getElementById('btn-edt').style.display = 'none';
  getElementById('btn-rm').style.display = 'none';
  getElementById('edit-post').setAttribute('contenteditable', 'true');
  getElementById('edit-post').focus();
  findElement('.post-info').style.display = 'none';
  getElementById('post-options').style.display = 'block';
});

onBlur(getElementById('edit-post'), () => {
  getElementById('edit-post').focus();
});

onClick(getElementById('save-post'), () => {
  document.location.href = '/posts/postId';
});

onClick(getElementById('cancel-post'), () => {
  document.location.href = '/posts/postId';
});
