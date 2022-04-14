import * as React from 'react';
import { Provider, webLightTheme, webDarkTheme } from '@cebus/react-components';
import { useLocalDefault, useThemeDetector, useGetLocal } from '../utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { SSRProvider } from '@fluentui/react-utilities';
import { RendererProvider, createDOMRenderer } from '@griffel/react';
import { Partytown } from '@builder.io/partytown/react';
import { AppProvider } from '../context';
import '../styles/globals.css';

export default function App(props: AppProps & { renderer: any }) {
  const { Component, pageProps, renderer } = props;
  const isDarkTheme = useThemeDetector();
  const [isMounted, setIsMounted] = React.useState(false);

  useLocalDefault('theme', 'System');
  const userTheme = useGetLocal('theme');

  const findTheme = React.useCallback(
    (theme: string) => {
      switch (theme) {
        case 'System':
          return isDarkTheme ? webDarkTheme : webLightTheme;
        case 'Dark':
          return webDarkTheme;
        case 'Light':
          return webLightTheme;
        default:
          return webLightTheme;
      }
    },
    [isDarkTheme],
  );

  const [theme, setTheme] = React.useState(findTheme(userTheme));

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    setTheme(findTheme(userTheme));
  }, [isDarkTheme, findTheme, userTheme]);

  return (
    <>
      <Head>
        <title>Bounty Bay</title>
        <meta name="title" content="Bounty Bay" />
        <meta name="description" content="We allow developers to easily create bounties for freelancers." />
        <link rel="icon" type="image/svg+xml" href="/image/favicon.svg" />
      </Head>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Script
        async
        type="text/partytown"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <style jsx global>{`
        body {
          background-color: ${theme.canvasColor};
        }
      `}</style>
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        <SSRProvider>
          <AppProvider value={{ setTheme, findTheme }}>
            {isMounted && (
              <Provider theme={theme}>
                <Component {...pageProps} />
              </Provider>
            )}
          </AppProvider>
        </SSRProvider>
      </RendererProvider>
    </>
  );
}
