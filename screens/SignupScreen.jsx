import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from 'Auth/AuthContent';
import LoadingOverlay from 'ui/LoadingOverlay';
import { AuthContext } from 'auth-context';
import { createUser } from 'auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password);
      authenticate(token);
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
