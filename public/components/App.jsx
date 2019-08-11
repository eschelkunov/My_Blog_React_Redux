import Home from './homePage/Home.jsx';
import SinglePost from './singlePostPage/SinglePost.jsx';
import AddPost from './addPostPage/AddPost.jsx';
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsError, getPosts, getPostsLoading } from '../reducers/postsReducer';
import { fetchPosts } from '../actions/postsActions';

export class App extends Component {
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <LoadingSpinner />;
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Route path={['/posts', '/']} exact component={Home} />
          <Route path="/posts/:id" exact component={SinglePost} />
          <Route path="/new" exact component={AddPost} />
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  error: getPostsError(state.Posts),
  posts: getPosts(state.Posts),
  loading: getPostsLoading(state.Posts),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts: fetchPosts,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
