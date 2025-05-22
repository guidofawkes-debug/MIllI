import React, { createContext, useState } from 'react';
import { THEME } from '../config/constants';

interface ThemeContextType {
  colors: typeof THEME.colors;
  updateTheme: (newTheme: Partial<ThemeContextType>) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  colors: THEME.colors,
  updateTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>({ colors: THEME.colors, updateTheme: () => {} });

  const updateTheme = (newTheme: Partial<ThemeContextType>) => {
    setTheme(prev => ({ ...prev, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};