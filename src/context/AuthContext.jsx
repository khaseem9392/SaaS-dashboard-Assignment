import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('mock_jwt'));

  const login = (username, password) => {
    if (password === 'test123') {
      const mockJwt = 'mock-jwt-token';
      localStorage.setItem('mock_jwt', mockJwt);
      setToken(mockJwt);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('mock_jwt');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};