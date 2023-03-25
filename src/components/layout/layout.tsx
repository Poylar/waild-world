import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from '@/components/core/Header';
import { I_Data } from '@/pages/api/siteSettings';
import useThemeStore from '@/store/useThemeStore';

interface Props {
  children: React.ReactNode;
  data?: I_Data;
}

function Layout({ children }: Props) {
  const themeState = useThemeStore((state) => state.themeState);
  const themeChange = useThemeStore((state) => state.changeTheme);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeChange(darkModeQuery ? 'dark' : 'light');
  }, [themeChange]);

  const GlobalStyle = createGlobalStyle`
    body {
      transition: all .5s;
      background: ${themeState.background};
      color:${themeState.textColor}
    }
`;
  return (
    <ThemeProvider theme={themeState}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
