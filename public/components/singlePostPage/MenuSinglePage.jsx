import React, { Component } from 'react';
import styles from './css/MenuSinglePage.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { showEditMode } from '../../actions/visibilityActions';
import { showRemovePopup } from '../../actions/visibilityActions';

class Menu extends Component {
  render() {
    const menuClasses = classNames({
      [styles.menu]: true,
      [styles.editMode]: true,
    });

    const { editMode, showEditMode, showRemovePopup, currentUser } = this.props;
    return currentUser.role === 'admin' ? (
      <div className={editMode ? menuClasses : styles.menu}>
        <NavLink to="/posts" id="btn-back-to-posts">
          <i className="fas fa-long-arrow-alt-left" /> Back to Posts
        </NavLink>
        <NavLink id="btn-edt" to="#edit" onClick={() => showEditMode()}>
          <i className="fas fa-edit" /> Edit Post
        </NavLink>
        <NavLink id="btn-rm" to="#remove" onClick={() => showRemovePopup()}>
          <i className="fas fa-trash-alt" /> Remove Post
        </NavLink>
      </div>
    ) : (
      <div className={styles.menu}>
        <NavLink to="/posts" id="btn-back-to-posts">
          <i className="fas fa-long-arrow-alt-left" /> Back to Posts
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editMode: state.Menu.editMode,
    currentUser: state.Auth.currentUser,
  };
};

const mapDispatchToProps = {
  showEditMode,
  showRemovePopup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
