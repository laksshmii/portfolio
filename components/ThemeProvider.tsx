'use client';
import { MantineColorScheme, useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    // Set initial theme based on system preference or saved preference
    const savedTheme = localStorage.getItem('mantine-color-scheme') as MantineColorScheme;
    if (savedTheme) {
      setColorScheme(savedTheme);
    }
  }, [setColorScheme]);

  return <>{children}</>;
}