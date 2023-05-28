import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          type='text/javascript'
          src='https://www.bugherd.com/sidebarv2.js?apikey=au8vlesxwdywob2cbpyg9a'
          async='true'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
