import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './css/Form.module.css';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { submitPost } from '../../actions/postsActions';

class Form extends Component {
  state = {
    username: '',
    nameError: '',
    email: '',
    emailError: '',
    title: '',
    titleError: '',
    content: '',
    contentError: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    const { username, email, title, content } = this.state;
    let isError = false;
    const errors = {
      nameError: '',
      emailError: '',
      titleError: '',
      contentError: '',
    };
    if (username.length < 1 || username.length > 50 || username.trim() == '') {
      isError = true;
      errors.nameError = "Name needs to be max 50 characters long or can't be empty";
    }
    if (!~email.indexOf('@') || !~email.indexOf('.')) {
      isError = true;
      errors.emailError = 'Requires valid email';
    }
    if (title.length < 1 || title.length > 100 || title.trim() == '') {
      isError = true;
      errors.titleError = "Title needs to be max 100 characters long or can't be empty";
    }
    if (content.length < 1 || content.length > 255 || content.trim() == '') {
      isError = true;
      errors.contentError = "Content needs to be max 255 characters long or can't be empty";
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  onSubmit = e => {
    const err = this.validate();
    if (!err) {
      this.setState({
        username: '',
        nameError: '',
        email: '',
        emailError: '',
        title: '',
        titleError: '',
        content: '',
        contentError: '',
      });
      this.props.submitPost(this.state);
    }
  };

  render() {
    const { nameError, emailError, titleError, contentError } = this.state;
    const nameClasses = classNames({
      [styles.fieldStyle]: true,
      [styles.fieldSplit]: true,
      [styles.alignLeft]: true,
    });
    const emailClasses = classNames({
      [styles.fieldStyle]: true,
      [styles.fieldSplit]: true,
      [styles.alignRight]: true,
    });
    const titleClasses = classNames({
      [styles.fieldStyle]: true,
      [styles.fieldFull]: true,
      [styles.alignNone]: true,
    });

    return (
      <div className={styles.formStyle}>
        <ul>
          <li>
            <input
              id="username"
              type="text"
              name="username"
              className={nameClasses}
              placeholder="Name"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <input
              id="email"
              type="email"
              name="email"
              className={emailClasses}
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </li>
          <li>
            <input
              id="title"
              type="text"
              name="title"
              className={titleClasses}
              placeholder="Title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
            />
          </li>
          <li>
            <textarea
              id="content"
              name="content"
              className={styles.fieldStyle}
              placeholder="Post something here.."
              value={this.state.content}
              onChange={e => this.handleChange(e)}
            />
          </li>
          <li>
            <div className={styles.submit} id="submit" onClick={this.onSubmit}>
              Post
            </div>
          </li>
        </ul>
        <div style={{ color: 'red' }}>{nameError}</div>
        <div style={{ color: 'red' }}>{emailError}</div>
        <div style={{ color: 'red' }}>{titleError}</div>
        <div style={{ color: 'red' }}>{contentError}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitPost,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Form),
);
