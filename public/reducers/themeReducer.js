const initialState = { theme: 'light' };

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, theme: action.themeMode };
    default:
      return state;
  }
}

export default themeReducer;
