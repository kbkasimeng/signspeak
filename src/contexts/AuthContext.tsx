import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface WordHistoryItem {
  word: string;
  timestamp: string;
  type: 'voice' | 'text';
  userId?: string;
  userName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  saveWordHistory: (words: WordHistoryItem[]) => void;
  getWordHistory: () => WordHistoryItem[];
  getLastLogoutDate: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('signspeak_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('signspeak_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in production, this would be a real API call
    if (email && password.length >= 6) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
      };
      
      // Check if there's existing history data for this email
      const existingHistory = localStorage.getItem(`signspeak_history_email_${email}`);
      if (existingHistory) {
        try {
          const historyData = JSON.parse(existingHistory);
          // Migrate the history to the new user ID
          const migratedHistoryData = {
            ...historyData,
            userId: mockUser.id,
            userName: mockUser.name,
            userEmail: mockUser.email,
            migratedAt: new Date().toISOString()
          };
          localStorage.setItem(`signspeak_history_${mockUser.id}`, JSON.stringify(migratedHistoryData));
          localStorage.setItem(`signspeak_history_email_${email}`, JSON.stringify(migratedHistoryData));
        } catch (error) {
          console.error('Error migrating word history:', error);
        }
      }
      
      setUser(mockUser);
      localStorage.setItem('signspeak_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration - in production, this would be a real API call
    if (email && password.length >= 6 && name.trim()) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: name.trim(),
        createdAt: new Date().toISOString()
      };
      
      // Check if there's existing history data for this email
      const existingHistory = localStorage.getItem(`signspeak_history_email_${email}`);
      if (existingHistory) {
        try {
          const historyData = JSON.parse(existingHistory);
          // Migrate the history to the new user ID
          const migratedHistoryData = {
            ...historyData,
            userId: mockUser.id,
            userName: mockUser.name,
            userEmail: mockUser.email,
            migratedAt: new Date().toISOString()
          };
          localStorage.setItem(`signspeak_history_${mockUser.id}`, JSON.stringify(migratedHistoryData));
          localStorage.setItem(`signspeak_history_email_${email}`, JSON.stringify(migratedHistoryData));
        } catch (error) {
          console.error('Error migrating word history:', error);
        }
      }
      
      setUser(mockUser);
      localStorage.setItem('signspeak_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const saveWordHistory = (words: WordHistoryItem[]) => {
    if (user) {
      const historyData = {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        words: words,
        savedAt: new Date().toISOString()
      };
      // Save by user ID
      localStorage.setItem(`signspeak_history_${user.id}`, JSON.stringify(historyData));
      // Also save by email for persistence across sessions
      localStorage.setItem(`signspeak_history_email_${user.email}`, JSON.stringify(historyData));
    }
  };

  const getWordHistory = (): WordHistoryItem[] => {
    if (user) {
      // First try to get history by current user ID
      let savedHistory = localStorage.getItem(`signspeak_history_${user.id}`);
      
      // If no history found by ID, try to find by email (for returning users)
      if (!savedHistory) {
        savedHistory = localStorage.getItem(`signspeak_history_email_${user.email}`);
      }
      
      if (savedHistory) {
        try {
          const historyData = JSON.parse(savedHistory);
          return historyData.words || [];
        } catch (error) {
          console.error('Error parsing word history:', error);
        }
      }
    }
    return [];
  };

  const getLastLogoutDate = (): string | null => {
    if (user) {
      // First try to get history by current user ID
      let savedHistory = localStorage.getItem(`signspeak_history_${user.id}`);
      
      // If no history found by ID, try to find by email (for returning users)
      if (!savedHistory) {
        savedHistory = localStorage.getItem(`signspeak_history_email_${user.email}`);
      }
      
      if (savedHistory) {
        try {
          const historyData = JSON.parse(savedHistory);
          // Return logoutAt if available, otherwise fall back to savedAt
          return historyData.logoutAt || historyData.savedAt || null;
        } catch (error) {
          console.error('Error parsing word history:', error);
        }
      }
    }
    return null;
  };

  const logout = () => {
    // Save current word history before logging out
    if (user) {
      // Get current word history from HomePage state (this will be passed from the component)
      // For now, we'll save an empty array as the current implementation doesn't have access to it
      // This will be handled in the HomePage component
      const currentHistory = getWordHistory();
      if (currentHistory.length > 0) {
        saveWordHistory(currentHistory);
      }
    }
    
    setUser(null);
    localStorage.removeItem('signspeak_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    saveWordHistory,
    getWordHistory,
    getLastLogoutDate
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};