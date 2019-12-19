import React from 'react';

import AuthForm from './AuthForm';

const Login = () => 
<AuthForm heading="Sign In" redirect="/profile" endpoint='login' />;

export default Login;
