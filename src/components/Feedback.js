import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Message, Form, Dropdown } from 'semantic-ui-react';
import { Redirect, useHistory } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

const AuthForm = ({ heading, redirect, endpoint, setAuth = false }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [errors, setErrors] = useState({});
  const [mainError, setMainError] = useState(false);
  const latestId = useSelector(state => state.session.id);
  const authId = useSelector(state => state.auth.id);
  //const id = useSelector(state => state.auth.id);
  const { REACT_APP_SERVER: server } = process.env;
  let history = useHistory();

  //   console.log(`latest: ${JSON.stringify(latestId)}`);
  //   console.log(`auth id: ${JSON.stringify(authId)}`);

  const getDropdownOptions = (number, prefix = 'Choice ') =>
    _.times(number, index => ({
      key: index,
      text: `${prefix}${index}`,
      value: index
    }));

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
    setComment('');
  };

  const handleSubmit = async () => {
    setIsWaiting(true);
    setErrors({});
    try {
      const formFields = {
        player: authId,
        session: latestId,
        comment,
        rating
      };
      console.log(`ff, ${JSON.stringify(formFields)}`);
      const res = await axios.post(`${server}/comments`, formFields);
      console.log(`res, ${JSON.stringify(res.data)}`);
      setIsWaiting(false);
      clearForm();
      dispatch({ type: 'SET_HAS_COMMENTED', payload: true });
      localStorage.setItem('hasCommented', 'true');
      history.push('/profile');
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
        <Form.TextArea
          label="About"
          placeholder="Tell us how it went..."
          onChange={(e, { name, value }) => setComment(value)}
        />
        <Dropdown
          text={`Rating: ${rating}`}
          onChange={(e, { value }) => setRating(value)}
          compact
          selection
          options={getDropdownOptions(6, '')}
        />

        <Button
          style={{ marginLeft: '1.5rem' }}
          loading={isWaiting}
          content="Submit"
        />
      </Form>
    </div>
  );
};

export default AuthForm;
