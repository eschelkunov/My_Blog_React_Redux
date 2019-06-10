
// Popup
const findElement = by => document.querySelector(by);

const getElementById = id => document.getElementById(id);

const closePopupAndRedirectTo = (page) => {
  findElement('.bg-modal').style.display = 'none';
  document.location.href = page;
};

const showPopupWithMessage = (message, displayState) => {
  findElement('.modal-message').textContent = message;
  findElement('.bg-modal').style.display = displayState;
};

getElementById('btn-rm').addEventListener('click', () => {
  showPopupWithMessage('Are you sure?', 'flex');
});

findElement('#agree').addEventListener('click', () => {
  closePopupAndRedirectTo('/posts');
});

findElement('#disagree').addEventListener('click', () => {
  closePopupAndRedirectTo('/posts/postId');
});

// Edit button

getElementById('btn-edt').addEventListener('click', () => {
  getElementById('btn-back-to-posts').style.display = 'none';
  getElementById('btn-edt').style.display = 'none';
  getElementById('btn-rm').style.display = 'none';
  getElementById('edit-post').setAttribute('contenteditable', 'true');
  getElementById('edit-post').focus();
  findElement('.post-info').style.display = 'none';
  getElementById('post-options').style.display = 'block';
});

getElementById('edit-post').addEventListener('blur', () => {
  getElementById('edit-post').focus();
});

getElementById('save-post').addEventListener('click', () => {
  document.location.href = '/posts/postId';
});

getElementById('cancel-post').addEventListener('click', () => {
  document.location.href = '/posts/postId';
});
