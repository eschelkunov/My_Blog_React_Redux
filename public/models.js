import { findElement, getElementById } from './src/scripts';

// XML HTTP Requests

// Fetch all posts
export const getAllPosts = () => new Promise((resolve) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resolve(JSON.parse(xhttp.responseText));
    }
  };
  xhttp.open('get', '/api/posts/', true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
});

// Open post
export const openPost = id => new Promise((resolve) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resolve(JSON.parse(xhttp.responseText));
    }
  };
  xhttp.open('get', `/api/posts/${id}`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
});

// Add a post
export const addPost = data => new Promise((resolve) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resolve(JSON.parse(xhttp.responseText));
    }
  };
  xhttp.open('post', '/api/posts/', true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(JSON.stringify(data));
});

// Edit post
export const editPost = data => new Promise((resolve) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      findElement('.post h1').innerText = data.title;
      findElement('.post p').innerText = data.content;
      resolve();
    }
  };
  xhttp.open('put', `/api/posts/${data.id}`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(JSON.stringify(data));
});

// Delete post
export const deletePost = () => new Promise((resolve) => {
  const urlPath = document.location.pathname;
  const id = urlPath.slice(urlPath.lastIndexOf('/') + 1);
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resolve();
    }
  };
  xhttp.open('delete', `/api/posts/${id}`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
});
