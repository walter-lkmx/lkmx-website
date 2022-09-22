import Document, { Html, Head, Main, NextScript } from 'next/document';
import Body from '@flare-react/body'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
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