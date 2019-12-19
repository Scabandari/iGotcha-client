import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Icon, Button } from 'semantic-ui-react';
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

const baseDate = new Date(2000, 1, 1);
const { REACT_APP_SERVER: server } = process.env;

const Profile = () => {
  //localStorage.setItem('hasCommented', 'false');
  const dispatch = useDispatch();
  //const [latest, setSession] = useState({});
  const auth = useSelector(state => state.auth.isAuth);
  const id = useSelector(state => state.auth.id);
  const title = useSelector(state => state.session.title);
  const hasCommented = useSelector(state => state.comment.hasCommented);
  useProtectedRoute();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${server}/sessions`);
      const filtered = response.data.filter(session =>
        session.players.includes(id)
      );
      const reduced = filtered.reduce((largest, current) =>
        current > largest ? largest : current
      );
      //setSession(reduced);
      dispatch({ type: 'SET_SESSION_TITLE', payload: reduced.title });
      dispatch({ type: 'SET_SESSION_ID', payload: reduced.id });
      localStorage.setItem('latest_id', reduced._id);
      localStorage.setItem('latest_title', reduced.title);
      console.log(`fetched: ${JSON.stringify(reduced)}`);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest Session</h1>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          "You can leave some feedback on your latest session."
          <Card.Content extra>
            {!hasCommented && (
              <Link to="/feedback">
                {' '}
                <Button icon="edit" />
              </Link>
            )}
          </Card.Content>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Profile;
