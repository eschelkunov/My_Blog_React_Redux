import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    console.log('Error: ', error);
    console.log('Info: ', info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>oops! Some error has ocurred! :(</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
