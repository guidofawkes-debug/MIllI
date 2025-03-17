
import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    success: string;
    error: string;
  };
  typography: {
    fontFamily: string;
    headingFont: string;
    bodyFont: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  updateTheme: (newTheme: Partial<ThemeContextType>) => void;
}

const defaultTheme: ThemeContextType = {
  colors: {
    primary: '#00ff00',
    secondary: '#003300',
    accent: '#00cc00',
    background: '#000000',
    text: '#ffffff',
    success: '#00ff00',
    error: '#ff0000'
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    headingFont: 'system-ui, -apple-system, sans-serif',
    bodyFont: 'system-ui, -apple-system, sans-serif'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  },
  updateTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>(defaultTheme);

  const updateTheme = (newTheme: Partial<ThemeContextType>) => {
    setTheme(prev => ({ ...prev, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
