import React, { Component } from 'react';
import styles from './css/Modal.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { closePopup } from '../../actions/visibilityActions';
import { confirmDeleting } from '../../actions/postsActions';
import { withRouter } from 'react-router';

class Modal extends Component {
  render() {
    const { removePopup, closePopup, match, isPermissionError } = this.props;

    return (
      <div className={removePopup ? styles.bgModalShow : styles.bgModalHide}>
        <div className={styles.modalContent}>
          <span className="modalMessage">Are you sure?</span>
          <div className={styles.options}>
            <NavLink
              to="#"
              className={styles.confirmRemoving}
              id="agree"
              onClick={() => this.props.confirmDeleting(match.params.id)}
            >
              yes
            </NavLink>
            <NavLink
              to="#"
              className={styles.cancelRemoving}
              id="disagree"
              onClick={() => closePopup()}
            >
              no
            </NavLink>
          </div>
          <div style={{ color: 'red' }}>{isPermissionError}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    removePopup: state.Menu.removePopup,
    isPermissionError: state.Posts.isPermissionError,
  };
};

const mapDispatchToProps = {
  closePopup,
  confirmDeleting,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Modal),
);
