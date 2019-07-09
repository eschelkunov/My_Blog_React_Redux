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
    getElementById('btn-back-to-posts').style.display = 'none';
    getElementById('btn-edt').style.display = 'none';
    getElementById('btn-rm').style.display = 'none';
    getElementById('edit-post').setAttribute('contenteditable', 'true');
    getElementById('edit-post').focus();
    findElement('.post-info').style.display = 'none';
    getElementById('post-options').style.display = 'block';
  } else {
    getElementById('btn-back-to-posts').style.display = 'inline-block';
    getElementById('btn-edt').style.display = 'inline-block';
    getElementById('btn-rm').style.display = 'inline-block';
    getElementById('edit-post').setAttribute('contenteditable', 'false');
    getElementById('edit-post').blur();
    findElement('.post-info').style.display = 'block';
    getElementById('post-options').style.display = 'none';
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

export function initListeners(page) {
  // change theme listeners:
  document.querySelectorAll('.toolbar > button').forEach((btn) => {
    btn.addEventListener('click', updateTheme);
  });
  // common listeners:
  onClick(getElementById('btn-back-to-posts'), (event) => {
    onNavItemClick('/posts');
  });
  switch (page) {
    case 'home':
      onClick(getElementById('posts'), (event) => {
        event.preventDefault();
        getAllPosts().then(() => onNavItemClick('/posts'));
      });
      onClick(getElementById('new'), (event) => {
        event.preventDefault();
        onNavItemClick('/new');
      });
      document.querySelectorAll('h2>a').forEach((selector) => {
        const linkID = selector.getAttribute('id');
        document.querySelector(`#${linkID}`).addEventListener('click', (event) => {
          event.preventDefault();
          onNavItemClick(`/posts/${linkID.slice(1)}`);
        });
      });
      document.querySelectorAll('.short-post>a').forEach((selector) => {
        const linkID = selector.getAttribute('id');
        document.querySelector(`#${linkID}`).addEventListener('click', (event) => {
          event.preventDefault();
          onNavItemClick(`/posts/${linkID.slice(1)}`);
        });
      });
      break;
    case 'single':
      onClick(getElementById('btn-rm'), (event) => {
        event.preventDefault();
        showPopupWithMessage('Are you sure?', 'flex');
      });
      onClick(findElement('#agree'), (event) => {
        event.preventDefault();
        deletePost()
          .then(() => closePopup('.bg-modal'))
          .then(() => (location.href = '/posts'));
      });
      onClick(findElement('#disagree'), (event) => {
        event.preventDefault();
        closePopup('.bg-modal');
      });
      onClick(getElementById('btn-edt'), (event) => {
        event.preventDefault();
        showEditMode(true);
      });
      // when click outside
      onBlur(getElementById('edit-post'), () => {
        getElementById('edit-post').focus();
      });
      onClick(getElementById('save-post'), (event) => {
        event.preventDefault();
        const title = findElement('.post h1').innerText;
        const content = findElement('.post p').innerText;
        const urlPath = document.location.pathname;
        const id = urlPath.slice(urlPath.lastIndexOf('/') + 1);
        editPost({ title, content, id }).then(() => showEditMode(false));
      });
      onClick(getElementById('cancel-post'), (event) => {
        event.preventDefault();
        showEditMode(false);
      });
      break;
    case 'new':
      onClick(getElementById('submit'), () => {
        const name = getElementById('name').value;
        const email = getElementById('email').value;
        const title = getElementById('title').value;
        const content = getElementById('content').value;
        const user_id = 1;
        debugger;
        addPost({ title, content, user_id }).then((data) => {
          debugger;
          onNavItemClick(`/posts/${data.id}`);
        });
      });
      break;
  }
}
