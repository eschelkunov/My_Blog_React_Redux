import React, { Component } from 'react';
import styles from './css/LatestPost.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostsError, getPosts, getPostsLoading } from '../../reducers/postsReducer';

class LatestPost extends Component {
  render() {
    const { posts } = this.props;
    return (
      <>
        {posts
          .slice(-5)
          .reverse()
          .map(post => {
            return (
              <div key={post.id} className={styles.latestPost}>
                <div className={styles.mediaLeft}>
                  <i className="fas fa-arrow-circle-right" />
                </div>
                <div className={styles.mediaBody}>
                  <h2 className={styles.latestPostHeader + styles.mediaHeading}>
                    <NavLink id={'l' + post.id} to={'/posts/' + post.id}>
                      {post.post_title}
                    </NavLink>
                  </h2>
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

export default connect(mapStateToProps)(LatestPost);
