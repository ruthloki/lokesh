// Firebase Authentication Service
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Create user profile document in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = doc(db, 'users', userAuth.uid);
  const snapShot = await getDoc(userRef);
  
  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userRef, {
        displayName: displayName || additionalData?.displayName || '',
        email,
        photoURL: photoURL || '',
        createdAt,
        lastLoginAt: createdAt,
        isActive: true,
        role: 'user',
        preferences: {
          theme: 'dark',
          notifications: true,
          emailUpdates: true
        },
        stats: {
          tournamentsJoined: 0,
          matchesPlayed: 0,
          wins: 0,
          losses: 0
        },
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  } else {
    // Update last login time
    try {
      await setDoc(userRef, {
        lastLoginAt: new Date()
      }, { merge: true });
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  }
  
  return userRef;
};

// Email and Password Registration
export const registerWithEmailAndPassword = async (email, password, displayName) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with display name
    await updateProfile(user, { displayName });
    
    // Create user profile document
    await createUserProfileDocument(user, { displayName });
    
    return {
      success: true,
      user,
      message: 'Account created successfully!'
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: error.code,
      message: getAuthErrorMessage(error.code)
    };
  }
};

// Email and Password Sign In
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    
    // Update user profile document
    await createUserProfileDocument(user);
    
    return {
      success: true,
      user,
      message: 'Signed in successfully!'
    };
  } catch (error) {
    console.error('Sign in error:', error);
    return {
      success: false,
      error: error.code,
      message: getAuthErrorMessage(error.code)
    };
  }
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Create user profile document
    await createUserProfileDocument(user);
    
    return {
      success: true,
      user,
      message: 'Signed in with Google successfully!'
    };
  } catch (error) {
    console.error('Google sign in error:', error);
    return {
      success: false,
      error: error.code,
      message: getAuthErrorMessage(error.code)
    };
  }
};

// Sign Out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: 'Signed out successfully!'
    };
  } catch (error) {
    console.error('Sign out error:', error);
    return {
      success: false,
      error: error.code,
      message: 'Error signing out. Please try again.'
    };
  }
};

// Password Reset
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: 'Password reset email sent! Check your inbox.'
    };
  } catch (error) {
    console.error('Password reset error:', error);
    return {
      success: false,
      error: error.code,
      message: getAuthErrorMessage(error.code)
    };
  }
};

// Auth State Observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Error message helper
const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled.';
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with the same email but different sign-in credentials.';
    case 'auth/auth-domain-config-required':
      return 'Authentication configuration error.';
    case 'auth/cancelled-popup-request':
      return 'Sign-in was cancelled.';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by the browser.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed before completing.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for authentication.';
    default:
      return 'An error occurred during authentication. Please try again.';
  }
};