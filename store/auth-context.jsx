import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({
  authenticate: (_token) => {},
  isAuthenticated: false,
  logout: () => {},
  token: '',
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = (token) => setAuthToken(token);

  const logout = () => setAuthToken(null);

  const value = useMemo(() => ({ authenticate, isAuthenticated: !!authToken, logout, token: authToken }), [authToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
