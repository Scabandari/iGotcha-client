import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div style={{ margin: '10rem' }}>
    <h1>Hi There</h1>
    <h5>Feel free to sign up or sign in.</h5>
    <Link to="/register">
      <Button>Sign Up</Button>
    </Link>
    <Link to="/login">
      <Button>Sign In</Button>
    </Link>
  </div>
);

export default Home;
