import Home from './homePage/Home.jsx';
import SinglePost from './singlePostPage/SinglePost.jsx';
import AddPost from './addPostPage/AddPost.jsx';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsError, getPosts, getPostsLoading } from '../reducers/postsReducer';
import { fetchPosts } from '../actions/postsActions';
import mountains from '../images/mountains.jpg';
import hero from '../images/site-hero.jpg';
import PrivateRoute from './privateRoute';

export class App extends Component {
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  componentDidUpdate() {
    document.getElementById('body').style.backgroundImage =
      this.props.theme === 'light' ? `url(/${hero})` : `url(/${mountains})`;
  }

  render() {
    const { loading } = this.props;
    if (loading) return <LoadingSpinner />;
    return (
      <BrowserRouter>
        <PrivateRoute path="/posts" exact component={Home} />
        <PrivateRoute path="/posts/:id" exact component={SinglePost} />
        <PrivateRoute path="/new" exact component={AddPost} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  error: getPostsError(state.Posts),
  posts: getPosts(state.Posts),
  loading: getPostsLoading(state.Posts),
  theme: state.Theme.theme,
  currentUser: state.Auth.currentUser,
  isAuthenticated: state.Auth.isAuthenticated,
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
