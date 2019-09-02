export const SHOW_EDIT_POST_MODE = 'SHOW_EDIT_POST_MODE';
export const SHOW_REMOVE_POST_POPUP = 'SHOW_REMOVE_POST_POPUP';
export const SWITCH_THEME = 'SWITCH_THEME';

export const closeEditMode = () => ({
  type: SHOW_EDIT_POST_MODE,
  editMode: false,
});

export const closePopup = () => ({
  type: SHOW_REMOVE_POST_POPUP,
  removePopup: false,
});

export const showEditMode = () => ({
  type: SHOW_EDIT_POST_MODE,
  editMode: true,
});

export const showRemovePopup = () => ({
  type: SHOW_REMOVE_POST_POPUP,
  removePopup: true,
});

export const switchTheme = value => ({
  type: SWITCH_THEME,
  themeMode: value,
});
