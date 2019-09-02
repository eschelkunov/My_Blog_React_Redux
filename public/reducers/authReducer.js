import { LOGIN, LOGOUT } from '../actions/authActions';

const initialState = { currentUser: {}, isAuthenticated: false };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload.user ? action.payload.user : action.payload,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case LOGOUT:
      return { ...state, currentUser: {}, isAuthenticated: false };
    default:
      return {
        ...state,
        currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
        isAuthenticated: !!localStorage.getItem('jwtToken'),
      };
  }
}
