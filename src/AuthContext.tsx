import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}



const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = useSelector((state:any) => state.user.currentUser);


  const [isAuthenticated, setIsAuthenticated] =useState(user);

  const login = () => {
    setIsAuthenticated(true);
  }
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
