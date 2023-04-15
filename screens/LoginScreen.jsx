import React, { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from 'Auth/AuthContent';
import LoadingOverlay from 'ui/LoadingOverlay';
import { login } from 'auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      await login(email, password);
    } catch {
      Alert.alert('Authentication failed', 'Could not log you in. Please check your credentials.');
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
