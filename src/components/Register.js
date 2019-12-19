import React from 'react';

import AuthForm from './AuthForm';

const Register = () => (
  <AuthForm heading="Sign Up" redirect="/login" endpoint="register" />
);

export default Register;
