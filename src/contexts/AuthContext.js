import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate authentication check on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('consequence_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          email: email,
          uid: Date.now().toString(),
          displayName: email.split('@')[0]
        };
        localStorage.setItem('consequence_user', JSON.stringify(user));
        setCurrentUser(user);
        resolve({ user });
      }, 1000);
    });
  };

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          email: email,
          uid: Date.now().toString(),
          displayName: email.split('@')[0]
        };
        localStorage.setItem('consequence_user', JSON.stringify(user));
        setCurrentUser(user);
        resolve({ user });
      }, 1000);
    });
  };

  const loginWithGoogle = async () => {
    // Simulate Google login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          email: 'user@gmail.com',
          uid: Date.now().toString(),
          displayName: 'Google User',
          photoURL: null
        };
        localStorage.setItem('consequence_user', JSON.stringify(user));
        setCurrentUser(user);
        resolve({ user });
      }, 1000);
    });
  };

  const logout = async () => {
    localStorage.removeItem('consequence_user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};