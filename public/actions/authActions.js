import { auth } from '../models';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const doLogin = user => ({
  type: LOGIN,
  payload: user,
});

export const doLogout = () => ({
  type: LOGOUT,
  payload: null,
});

export function submitLogin(data) {
  const { username, password } = data;
  return (dispatch) => {
    auth({
      username,
      password,
    }).then((resp) => {
      if (resp.token) {
        localStorage.setItem('jwtToken', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        const { isAuthenticated, user } = resp;
        dispatch(doLogin({ isAuthenticated, user }));
        this.history.push('/posts');
      } else {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        dispatch(doLogin(resp));
      }
    });
  };
}

export function submitLogout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    dispatch(doLogout());
    this.history.push('/');
  };
}
