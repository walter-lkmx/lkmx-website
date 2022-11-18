import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Body } from '@lkmx/flare-react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/favicon/safari-pinned-tab.svg" color="#1324a0"/>
        <meta name="msapplication-TileColor" content="#1324a0"/>
        <meta name="theme-color" content="#ffffff"/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet"/>
      </Head>
        <Body>
          <Main/>
          <NextScript/>
        </Body>
      </Html>
    );
  }
}