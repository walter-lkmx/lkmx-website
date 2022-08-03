import Document, { Html, Head, Main, NextScript } from 'next/document';
import Body from '@flare-react/body'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <Body>
          <Main/>
          <NextScript/>
        </Body>
      </Html>
    );
  }
}