import React, { useState } from 'react';

import AuthContent from 'Auth/AuthContent';
import LoadingOverlay from 'ui/LoadingOverlay';
import { login } from 'auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
