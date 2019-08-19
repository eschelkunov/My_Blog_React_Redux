import React, { Component } from 'react';
import styles from './css/SinglePostHome.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostsError, getPosts, getPostsLoading } from '../../reducers/postsReducer';

class SinglePostHome extends Component {
  formatDate(date){
    return new Date(Date.parse(date)).toDateString()
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        {[...posts].reverse().map(post => {
          return (
            <div key={post.id} className={styles.shortPost} id={post.id}>
              <h1>{post.post_title}</h1>
              <p>{post.post_content}</p>
              <NavLink id={'p' + post.id} to={'/posts/' + post.id}>
                Continue reading <i className="fas fa-long-arrow-alt-right"></i>
              </NavLink>
              <div className={styles.postInfo}>
                <div className={styles.postDate}>
                  {this.formatDate(post.createdAt)}
                </div>
                <i className="far fa-comments"></i>
                <span>3</span>
                <i className="far fa-heart"></i>
                <span>5</span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: getPostsError(state.Posts),
  posts: getPosts(state.Posts),
  loading: getPostsLoading(state.Posts),
});

export default connect(mapStateToProps)(SinglePostHome);
