import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useProtectedRoute = () => {
  // const auth = localStorage.getItem('auth');
  // const email = localStorage.getItem('email');
//   localStorage.removeItem('auth');
//   localStorage.removeItem('email');
  const auth = useSelector(state => state.auth.isAuth);
  const history = useHistory();
  useEffect(() => {
    if (!auth) {
      history.push('/');
    }
  }, []);
  //return [auth, email];
};

export default useProtectedRoute;
