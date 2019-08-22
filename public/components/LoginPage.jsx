import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './singlePostPage/css/Header.module.css';
import styles from './LoginPage.module.css';
import { submitLogin } from '../actions/authActions';
import mountains from '../images/mountains.jpg';
import hero from '../images/site-hero.jpg';

class LoginPage extends Component {
  componentWillMount() {
    document.getElementById('body').style.backgroundImage =
      this.props.theme === 'light' ? `url(/${hero})` : `url(/${mountains})`;
  }

  state = {
    username: '',
    usernameError: '',
    password: '',
    passwordError: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        username: '',
        usernameError: '',
        password: '',
        passwordError: '',
      });
      this.props.submitLogin(this.state);
    }
  };

  validate = () => {
    const { username, password } = this.state;
    let isError = false;
    const errors = {
      usernameError: '',
      passwordError: '',
    };

    if (username.length < 1 || username.length > 100 || username.trim() == '') {
      isError = true;
      errors.usernameError = 'Please enter valid username';
    }
    if (password.length < 1 || password.length > 30) {
      isError = true;
      errors.passwordError = "Password must be max 30 characters long or can't be empty";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className={styles.container}>
        <header className={style.header}>
          <h1>Please login</h1>
        </header>
        <div className={styles.main}>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <form>
                <div className="form-group">
                  <label className="control-label">Username/Email:</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                  <div style={{ color: 'red' }}>{this.state.usernameError}</div>
                </div>

                <div className="form-group">
                  <label className="control-label">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)} //
                  />
                  <div style={{ color: 'red' }}>{this.state.passwordError}</div>
                  <div style={{ color: 'red' }}>
                    {Object.entries(currentUser).length === 0 && currentUser.constructor === Object
                      ? ''
                      : currentUser.message
                      ? 'Invalid username or password'
                      : ''}
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-sm" onClick={this.onSubmit}>
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.Auth.currentUser,
    theme: state.Theme.theme,
  };
};

const mapDispatchToProps = {
  submitLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
