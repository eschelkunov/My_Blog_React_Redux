import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  SHOW_PERMISSION_ERROR,
} from '../actions/postsActions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  isPermissionError: null,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: [],
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload.post.id ? action.payload.post : post)),
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id !== action.payload.id),
      };
    case SHOW_PERMISSION_ERROR:
      return {
        ...state,
        isPermissionError: action.payload.message,
      };
    default:
      return state;
  }
}

export const getPosts = state => state.posts;
export const getPostsLoading = state => state.loading;
export const getPostsError = state => state.error;
