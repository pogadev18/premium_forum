'use client';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  //   useEffect,
} from 'react';

type ThemeContextT = {
  mode: string;
  setMode: (mode: string) => void;
};

const ThemeContext = createContext<ThemeContextT | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState(''); // light | dark

  /*
    const handleThemeChange = () => {
      if (mode === 'dark') {
        setMode('light');
        document.documentElement.classList.add('light');
      } else {
        setMode('dark');
        document.documentElement.classList.add('dark');
      }
    };

    useEffect(() => {
      handleThemeChange();
    }, [mode]);
    */

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
