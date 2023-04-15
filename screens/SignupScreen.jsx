import React, { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from 'Auth/AuthContent';
import LoadingOverlay from 'ui/LoadingOverlay';
import { createUser } from 'auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch {
      Alert.alert('Authentication failed', 'Could not create user, please check your input and try again later.');
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
