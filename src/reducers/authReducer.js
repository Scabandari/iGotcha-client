const auth = localStorage.getItem('auth');
const email_ = localStorage.getItem('email');
const id_ = localStorage.getItem('id');

const initialState = {
  isAuth: auth === 'true',
  email: email_ || '',
  id: id_ || ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_IS_AUTH': // These should be constants
      return { ...state, isAuth: payload };
    case 'SET_EMAIL':
      return { ...state, email: payload };
    case 'SET_ID':
      return { ...state, id: payload };
    default:
      return state;
  }
}
