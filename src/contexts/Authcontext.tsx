import React, { 
    useContext, 
    useState, 
    useEffect, 
    ReactNode, 
    useMemo
  } from 'react';
  import { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
    User,
    db
  } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

    interface SignupParams {
        email: string;
        password: string;
        displayName: string;
        role: 'student' | 'doctor' | 'admin';
        rid: string;
    }
  
  interface AuthContextType {
    currentUser: User | null;
    signup: ({ email, password, displayName, role, rid }: SignupParams) => Promise<User>;
    login: (email: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    loading: boolean;
  }

  
  const AuthContext = React.createContext<AuthContextType | undefined>(undefined);
  const getAuthErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      switch (error.message) {
        case 'Firebase: Error (auth/email-already-in-use).':
          return 'Email already in use';
        case 'Firebase: Error (auth/invalid-email).':
          return 'Invalid email address';
        case 'Firebase: Error (auth/weak-password).':
          return 'Password should be at least 6 characters';
        default:
          return 'Registration failed. Please try again.';
      }
    }
    return 'An unknown error occurred';
  };
  
  export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    const signup = async ({ email, password, displayName, role, rid }: SignupParams): Promise<User> => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          
          // Update user profile
          await updateProfile(userCredential.user, { displayName });
      
          // Create user document in Firestore
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            uid: userCredential.user.uid,
            displayName,
            email,
            role,
            rid,
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp()
          });
      
          return userCredential.user;
        } catch (error) {
          console.error('Signup error:', error);
          throw new Error(getAuthErrorMessage(error));
        }
      };
      
  
    const login = async (email: string, password: string) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    };
  
    const logout = () => auth.signOut();
  
    const resetPassword = (email: string) => {
      return sendPasswordResetEmail(auth, email);
    };
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
    
        return unsubscribe;
      }, []);
    
    
  
    const value = useMemo(() => ({
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        loading
      }), [currentUser, loading]); // Add memoization
  
    return (
        <AuthContext.Provider value={value}>
        {!loading && children} 
      </AuthContext.Provider>
    );
  }