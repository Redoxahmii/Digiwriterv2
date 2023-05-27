/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { auth, db } from '../utills/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [Key, setKey] = useState('');


  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'business');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme)
    }
  }, [theme])
  const toggleTheme = () => {
    setTheme(theme === 'business' ? 'cupcake' : 'business')
  }
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };



  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const CheckDocumentExists = async (uid) => {
    try {

      const docRef = doc(db, "users", uid)
      const docSnap = await getDoc(docRef)
      console.log(docSnap)
      if (docSnap.exists()) {
        console.log('Document data:');
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  }

  const updateEntry = async (uid) => {
    try {
      const docRef = doc(db, "users", uid)
      await setDoc(docRef, {
        openai: Key,
      }, { merge: true })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const first = async () => {
      if (currentUser && currentUser.uid) {
        await CheckDocumentExists(currentUser.uid)
      }
    }
    first()
  }, [currentUser, CheckDocumentExists])


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  },);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(true);
      }
      else {
        setuser(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    user,
    signup,
    login,
    logout,
    loading,
    resetPassword,
    updateEmail,
    updatePassword,
    toggleTheme,
    showModal,
    setShowModal,
    updateEntry,
    Key,
    setKey
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};