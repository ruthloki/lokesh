// Authentication Context
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChange, getCurrentUser } from '../firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  userLoading: true,
  isAuthenticated: false
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (userAuth) => {
      try {
        if (userAuth) {
          // User is signed in
          setCurrentUser({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            emailVerified: userAuth.emailVerified,
            createdAt: userAuth.metadata.creationTime,
            lastSignInTime: userAuth.metadata.lastSignInTime
          });
        } else {
          // User is signed out
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setCurrentUser(null);
      } finally {
        setUserLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoading,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};