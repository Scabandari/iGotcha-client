import { combineReducers } from 'redux';
import authReducer from './authReducer';
import session from './sessionReducer';
import comment from './commentReducer';

export default combineReducers({
  auth: authReducer,
  session,
  comment
});
