import React, { useState } from 'react';

import AuthContent from 'Auth/AuthContent';
import LoadingOverlay from 'ui/LoadingOverlay';
import { createUser } from 'auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
