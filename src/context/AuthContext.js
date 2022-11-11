import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fireBase/config";
import { saveUser } from "../fireBase/usersCollection";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async () => signOut(auth);

  const googleLogin = async () => {
    const gProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, gProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      currentUser.metadata.createdAt === currentUser.metadata.lastLoginAt &&
        (await saveUser({
          email: currentUser.email,
          displayName: currentUser.displayName || currentUser.email,
        }));
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{ signup, login, googleLogin, logout, user, loading }}
    >
      {children}
    </authContext.Provider>
  );
}
