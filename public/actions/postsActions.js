import {
  addPost, getAllPosts, editPost, deletePost,
} from '../models';
import { closeEditMode, closePopup } from './visibilityActions';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const SHOW_PERMISSION_ERROR = 'SHOW_PERMISSION_ERROR';

// Simple plain actions
export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
});

export const addPostToStore = post => ({
  type: ADD_POST,
  payload: { post },
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: { post },
});

export const removePost = id => ({
  type: REMOVE_POST,
  payload: { id },
});

export const showPermissionError = message => ({
  type: SHOW_PERMISSION_ERROR,
  payload: { message },
});

// Async actions

export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsBegin());
    getAllPosts()
      .then((posts) => {
        dispatch(fetchPostsSuccess(posts));
        return posts;
      })
      .catch((error) => {
        dispatch => fetchPostsFailure(error);
      });
  };
}

export function submitPost(data) {
  const {
    username, email, title, content,
  } = data;
  return (dispatch) => {
    addPost({
      username,
      email,
      title,
      content,
    }).then((resp) => {
      if (resp.id) {
        dispatch(addPostToStore(resp));
        this.history.push(`/posts/${resp.id}`);
      } else {
        dispatch(showPermissionError(resp.message));
      }
    });
  };
}

export function confirmSaving(data) {
  const { post_title, post_content, id } = data;
  const updatedPostData = {
    title: post_title,
    content: post_content,
    id,
  };
  return (dispatch) => {
    editPost(updatedPostData).then((resp) => {
      if (resp[0] === 1) {
        dispatch(updatePost(data));
        dispatch(fetchPosts());
        dispatch(closeEditMode());
      } else {
        dispatch(showPermissionError(resp.message));
      }
    });
  };
}

export function confirmDeleting(postId) {
  return (dispatch) => {
    deletePost(postId).then((resp) => {
      if (resp === 1) {
        dispatch(removePost(postId));
        dispatch(closePopup());
        dispatch(fetchPosts());
        this.history.push('/posts');
      } else {
        dispatch(showPermissionError(resp.message));
      }
    });
  };
}
