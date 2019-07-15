import { onNavItemClick, init } from '../router';
import img1 from '../images/site-hero.jpg';
import img2 from '../images/mountains.jpg';
import {
  addPost, editPost, deletePost, openPost, getAllPosts,
} from '../models';

// Change theme scripts:
const root = document.documentElement;

function updateTheme(e) {
  switch (e.target.value) {
    case 'dark':
      root.style.setProperty('--bgImg', `url(${img2})`);
      root.style.setProperty('--continueLink', 'black');
      window.localStorage.setItem('theme', 'dark');
      break;
    case 'light':
      root.style.setProperty('--bgImg', `url(${img1})`);
      root.style.setProperty('--continueLink', '#60606e');
      window.localStorage.setItem('theme', 'light');
      break;
  }
}

const theme = window.localStorage.getItem('theme');
if (theme === 'dark') {
  root.style.setProperty('--bgImg', `url(/${img2})`);
  root.style.setProperty('--continueLink', 'black');
} else {
  root.style.setProperty('--bgImg', `url(/${img1})`);
  root.style.setProperty('--continueLink', '#60606e');
}

export function findElement(selector) {
  return document.querySelector(selector);
}

export function getElementById(id) {
  return document.getElementById(id);
}

const showEditMode = (bool) => {
  if (bool) {
    getElementById('edit-post').setAttribute('contenteditable', 'true');
    getElementById('edit-post').focus();
    findElement('.menu').classList.add('edit-mode');
    findElement('.post-info').classList.add('edit-mode');
    getElementById('post-options').classList.add('show-block');
  } else {
    getElementById('edit-post').setAttribute('contenteditable', 'false');
    getElementById('edit-post').blur();
    findElement('.menu').classList.remove('edit-mode');
    findElement('.post-info').classList.remove('edit-mode');
    getElementById('post-options').classList.remove('show-block');
  }
};

function onClick(element, callback) {
  // handler to prevent type error: Cannot read property 'addEventListener' of null
  if (element) {
    return element.addEventListener('click', callback);
  }
}

function onBlur(element, callback) {
  if (element) {
    return element.addEventListener('blur', callback);
  }
}

const closePopup = selector => new Promise((resolve) => {
  findElement(selector).style.display = 'none';
  resolve();
});

const showPopupWithMessage = (message, displayState) => {
  findElement('.modal-message').textContent = message;
  findElement('.bg-modal').style.display = displayState;
};

function handleThemeButtons() {
  return document.querySelectorAll('.toolbar > button').forEach((btn) => {
    btn.addEventListener('click', updateTheme);
  });
}

function handleButtonBackToPosts() {
  return onClick(getElementById('btn-back-to-posts'), (event) => {
    onNavItemClick('/posts');
  });
}

function handlePostsNavButton() {
  return onClick(getElementById('posts'), (event) => {
    event.preventDefault();
    getAllPosts().then(() => onNavItemClick('/posts'));
  });
}

function handleNewNavButton() {
  return onClick(getElementById('new'), (event) => {
    event.preventDefault();
    onNavItemClick('/new');
  });
}

function handleLatestPostLinks() {
  return document.querySelectorAll('h2>a').forEach((selector) => {
    const linkID = selector.getAttribute('id');
    document.querySelector(`#${linkID}`).addEventListener('click', (event) => {
      event.preventDefault();
      onNavItemClick(`/posts/${linkID.slice(1)}`);
    });
  });
}

function handleContinueLinks() {
  return document.querySelectorAll('.short-post>a').forEach((selector) => {
    const linkID = selector.getAttribute('id');
    document.querySelector(`#${linkID}`).addEventListener('click', (event) => {
      event.preventDefault();
      onNavItemClick(`/posts/${linkID.slice(1)}`);
    });
  });
}

function handleRemovePostButton() {
  return onClick(getElementById('btn-rm'), (event) => {
    event.preventDefault();
    showPopupWithMessage('Are you sure?', 'flex');
  });
}

function handleConfirmRemoving() {
  return onClick(findElement('#agree'), (event) => {
    event.preventDefault();
    const urlPath = document.location.pathname;
    const id = urlPath.slice(urlPath.lastIndexOf('/') + 1);
    deletePost(id)
      .then(() => closePopup('.bg-modal'))
      .then(() => (location.href = '/posts'));
  });
}

function handleRejectingRemoving() {
  return onClick(findElement('#disagree'), (event) => {
    event.preventDefault();
    closePopup('.bg-modal');
  });
}

function handleEditPostButton() {
  return onClick(getElementById('btn-edt'), (event) => {
    event.preventDefault();
    showEditMode(true);
  });
}

function handleClickOutsideFrame() {
  return onBlur(getElementById('edit-post'), () => {
    getElementById('edit-post').focus();
  });
}

function handleSavePostButton() {
  return onClick(getElementById('save-post'), (event) => {
    event.preventDefault();
    const title = findElement('.post h1').innerText;
    const content = findElement('.post p').innerText;
    const urlPath = document.location.pathname;
    const id = urlPath.slice(urlPath.lastIndexOf('/') + 1);
    editPost({ title, content, id }).then(() => showEditMode(false));
  });
}

function handleCancelPostButton() {
  return onClick(getElementById('cancel-post'), (event) => {
    event.preventDefault();
    showEditMode(false);
  });
}

function handleSubmitNewPostButton() {
  return onClick(getElementById('submit'), () => {
    const name = getElementById('name').value;
    const email = getElementById('email').value;
    const title = getElementById('title').value;
    const content = getElementById('content').value;
    const user_id = 1;
    addPost({ title, content, user_id }).then((data) => {
      onNavItemClick(`/posts/${data.id}`);
    });
  });
}

export function initListeners(page) {
  handleThemeButtons();
  handleButtonBackToPosts();
  switch (page) {
    case 'home':
      handlePostsNavButton();
      handleNewNavButton();
      handleLatestPostLinks();
      handleContinueLinks();
      break;
    case 'single':
      handleRemovePostButton();
      handleConfirmRemoving();
      handleRejectingRemoving();
      handleEditPostButton();
      handleClickOutsideFrame();
      handleSavePostButton();
      handleCancelPostButton();
      break;
    case 'new':
      handleSubmitNewPostButton();
      break;
  }
}
