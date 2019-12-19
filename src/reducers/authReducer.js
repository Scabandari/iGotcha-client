const auth = localStorage.getItem('auth');
const email_ = localStorage.getItem('email');

const initialState = {
  isAuth: auth === 'true',
  email: email_ || ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_IS_AUTH': // These should be constants
      return { ...state, isAuth: payload };
    case 'SET_EMAIL':
      return { ...state, email: payload };
    default:
      return state;
  }
}
