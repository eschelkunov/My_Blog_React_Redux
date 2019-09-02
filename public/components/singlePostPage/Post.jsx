import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostInfo from './PostInfo.jsx';
import styles from './css/Post.module.css';
import { getPosts, getPostsLoading } from '../../reducers/postsReducer';
import { closeEditMode } from '../../actions/visibilityActions';
import { confirmSaving } from '../../actions/postsActions';
import PostOptions from './PostOptions.jsx';
import LoadingSpinner from '../LoadingSpinner.jsx';

class Post extends Component {
  state = {
    post_title: this.props.post ? this.props.post.post_title : '',
    titleError: '',
    post_content: this.props.post ? this.props.post.post_content : '',
    contentError: '',
    id: this.props.post ? this.props.post.id : '',
  };

  validate = () => {
    const { post_title, post_content } = this.state;
    let isError = false;
    const errors = {
      titleError: '',
      contentError: '',
    };

    if (post_title.length < 1 || post_title.length > 100 || post_title.trim() == '') {
      isError = true;
      errors.titleError = "Title needs to be max 100 characters long or can't be empty";
    }
    if (post_content.length < 1 || post_content.length > 255 || post_content.trim() == '') {
      isError = true;
      errors.contentError = "Content needs to be max 255 characters long or can't be empty";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { loading, post, editMode, confirmSaving, closeEditMode, isPermissionError } = this.props;
    const { titleError, contentError } = this.state;

    if (loading || !post) {
      return <LoadingSpinner />;
    }
    const { post_title, post_content } = post;

    return editMode ? (
      <>
        <div className={styles.post}>
          <input
            type="text"
            name="post_title"
            autoFocus={true}
            className={styles.title}
            value={this.state.post_title}
            onChange={e => this.handleChange(e)}
          />
          <div style={{ color: 'red' }}>{titleError}</div>
          <textarea
            name="post_content"
            className={styles.content}
            value={this.state.post_content}
            onChange={e => this.handleChange(e)}
          />
          <div style={{ color: 'red' }}>{contentError}</div>
          <div style={{ color: 'red' }}>{isPermissionError}</div>
        </div>
        <PostOptions
          onSave={() => {
            const error = this.validate();
            if (!error) {
              confirmSaving(this.state);
            }
          }}
          onCancel={() => closeEditMode()}
        />
      </>
    ) : (
      <>
        <div className={styles.post}>
          <h1>{post_title}</h1>
          <p>{post_content}</p>
          <PostInfo createdAt={post.createdAt} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editMode: state.Menu.editMode,
    post: getPosts(state.Posts).find(post => post.id === parseInt(ownProps.params.id)),
    loading: getPostsLoading(state.Posts),
    isPermissionError: state.Posts.isPermissionError,
  };
};

const mapDispatchToProps = {
  closeEditMode,
  confirmSaving,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
