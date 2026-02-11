import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('gitaUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const loginAction = (userData) => {
    setUser(userData.user);
    localStorage.setItem('gitaToken', userData.token);
    localStorage.setItem('gitaUser', JSON.stringify(userData.user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gitaToken');
    localStorage.removeItem('gitaUser');
  };

  return (
    <AuthContext.Provider value={{ user, login: loginAction, logout }}>
      {children}
    </AuthContext.Provider>
  );
};