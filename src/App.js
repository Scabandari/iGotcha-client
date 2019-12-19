import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import { Register, Login, Home, Profile } from './components/';

// const Profile = () => {
//   return <div>Profile</div>;
// };

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;

//const Home = () => {
//   //const [checkRedirect, setRedirect] = useState(false);
//   //localStorage.setItem('auth', 'true');
//   //localStorage.removeItem('auth');
//   //const auth = localStorage.getItem('auth');
//   //   if (auth === 'true') {
//   //     return <Redirect to="/profile" />;
//   //   }
//   //   return <div>Home</div>;
//   return <div>home</div>;
// };

// const [world, setWorld] = useState('');
// const { REACT_APP_SERVER: server } = process.env;

// useEffect(() => {
//   const fetchData = async () => {
//     //   console.log(`server: ${server}`);
//     //   console.log(`server: ${JSON.stringify(process.env)}`);
//     const response = await axios.get(`${server}`);
//     setWorld(response.data);
//   };
//   fetchData();
// }, [server]);
// return <div className="App">hello {world}</div>;
