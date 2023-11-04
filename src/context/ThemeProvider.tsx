'use client';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ThemeContextT, ThemeColor } from '@/types';

const ThemeContext = createContext<ThemeContextT | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ThemeColor>('dark');

  /*
   `handleThemeChange` manages the application's theme based on user's preferences.
    It checks if the theme is set to 'dark' in localStorage. If not set in localStorage,
    it then checks the system preference using `window.matchMedia`.

   - If either localStorage is set to 'dark', or the system preference is 'dark' and
     localStorage doesn't have a theme set, the function sets the mode to 'dark' and
     applies a 'dark' class to the document's root element.

   - If neither of these conditions are true, it sets the theme to 'light' and
     removes the 'dark' class from the document's root element.
  */
  const handleThemeChange = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  };

  /*
    On component mount, `useEffect` invokes `handleThemeChange`. The dependency array
    contains `mode`, so the effect reruns whenever `mode` changes, keeping the UI
    in sync with the current theme mode.
  */
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

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
