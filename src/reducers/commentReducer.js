const commented = localStorage.getItem('hasCommented');
const hasCommented = commented === 'true' ? true : false;

const initialState = {
  hasCommented
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_HAS_COMMENTED': // These should be constants
      return { ...state, hasCommented: payload };
    default:
      return state;
  }
}
