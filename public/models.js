const BASE_URL = '/api/posts/';

const handleResponse = function (response) {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    }
    return Promise.reject(response);
  });
};

const doRequest = (url, params, method, body) => fetch(`${url}${params}`, {
  method,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  body,
}).then(handleResponse);

// Fetch all posts
export const getAllPosts = () => doRequest(BASE_URL, '');

// Open single post
export const openPost = id => doRequest(BASE_URL, `${id}`);

// Add a post
export const addPost = data => doRequest(BASE_URL, '', 'POST', JSON.stringify(data));

// Edit post
export const editPost = data => doRequest(BASE_URL, `${data.id}`, 'PUT', JSON.stringify(data));

// Delete post
export const deletePost = id => doRequest(BASE_URL, `${id}`, 'DELETE');
