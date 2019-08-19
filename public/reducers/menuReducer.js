const initialState = { editMode: false, removePopup: false };

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_EDIT_POST_MODE':
      return { ...state, editMode: action.editMode };
    case 'SHOW_REMOVE_POST_POPUP':
      return { ...state, removePopup: action.removePopup };
    default:
      return state;
  }
}

export default menuReducer;
