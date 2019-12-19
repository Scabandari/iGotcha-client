import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  Link
} from 'react-router-dom';

import useProtectedRoute from '../hooks';

const Profile = () => {
  const [latestSession, setSession] = useState({});
  const dispatch = useDispatch();
  //dispatch({ type: 'SET_IS_AUTH', payload: false });
  const auth = useSelector(state => state.auth.isAuth);
  const email = useSelector(state => state.auth.email);
  // const [auth, email] = useProtectedRoute();
  useProtectedRoute();
  return (
    <div>
      <h1>Latest Session</h1>
      Profile {auth}
      {email}
    </div>
  );
};

export default Profile;
