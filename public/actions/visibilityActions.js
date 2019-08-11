export const closeEditMode = () => ({
  type: 'SHOW_EDIT_POST_MODE',
  editMode: false,
});

export const closePopup = () => ({
  type: 'SHOW_REMOVE_POST_POPUP',
  removePopup: false,
});

export const showEditMode = () => ({
  type: 'SHOW_EDIT_POST_MODE',
  editMode: true,
});

export const showRemovePopup = () => ({
  type: 'SHOW_REMOVE_POST_POPUP',
  removePopup: true,
});
