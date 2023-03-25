import 'the-new-css-reset/css/reset.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
