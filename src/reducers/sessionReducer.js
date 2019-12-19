const title = localStorage.getItem('latest_title');
const id = localStorage.getItem('latest_id');

const initialState = {
  title,
  id
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_SESSION_TITLE': // These should be constants
      return { ...state, title: payload };
    case 'SET_SESSION_ID': // These should be constants
      return { ...state, id: payload };
    default:
      return state;
  }
}
