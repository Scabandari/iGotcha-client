import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Message, Form } from 'semantic-ui-react';
import { Redirect, useHistory } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

const AuthForm = ({ heading, redirect, endpoint, setAuth = false }) => {
  const dispatch = useDispatch();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [errors, setErrors] = useState({});
  const [mainError, setMainError] = useState(false);
  const { REACT_APP_SERVER: server } = process.env;
  let history = useHistory();

  const showErrors = name => {
    return (
      errors[name] && {
        content: errors[name]['msg'],
        pointing: 'below'
      }
    );
  };

  const clearForm = () => {
    setMainError(false);
    setName('');
    setPassword('');
    setEmail('');
  };

  const handleSubmit = async () => {
    setIsWaiting(true);
    setErrors({});
    try {
      const res = await axios.post(`${server}/users/${endpoint}`, {
        username,
        email,
        password
      });
      console.log(`res, ${JSON.stringify(res.data)}`);
      setIsWaiting(false);
      clearForm();
      if (setAuth) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('email', email);
        dispatch({ type: 'SET_IS_AUTH', payload: true });
        dispatch({ type: 'SET_EMAIL', payload: email });
      }
      history.push(redirect);
      // Redirect endpoint
      //setPortalIsOpen(true);
    } catch (err) {
      setMainError(true);
      console.log(`err, ${JSON.stringify(err.response.data)}`);
      setErrors(_.keyBy(err.response.data.errors, 'param'));
      setIsWaiting(false);
    }
  };

  const renderMainError = () => {
    return (
      <Message negative>
        <Message.Header>Something went wrong.</Message.Header>
      </Message>
    );
  };

  return (
    <div style={{ margin: '10rem' }}>
      <h1>{heading}</h1>
      {mainError && renderMainError()}
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Username *"
          value={username}
          name="username"
          placeholder="username"
          onChange={(e, { name, value }) => {
            setName(value);
            console.log(`name: ${value}`);
          }}
          error={showErrors('username')}
        />
        <Form.Input
          label="Email *"
          value={email}
          name="email"
          placeholder="your@email.com"
          onChange={(e, { name, value }) => setEmail(value)}
          error={showErrors('email')}
        />
        <Form.Input
          label="Password *"
          value={password}
          name="password"
          placeholder="secretpassword1234"
          onChange={(e, { name, value }) => setPassword(value)}
          error={showErrors('password')}
        />
        <Button loading={isWaiting} content="Submit" />
      </Form>
    </div>
  );
};

export default AuthForm;
