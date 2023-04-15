import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({
  authenticate: (_token) => {},
  isAuthenticated: false,
  logout: () => {},
  token: '',
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  };

  const value = useMemo(() => ({ authenticate, isAuthenticated: !!authToken, logout, token: authToken }), [authToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
