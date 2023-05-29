import Document, { Html, Head, Main, NextScript } from "next/document";
import siteMeta from "../libs/constants";
const { siteLang } = siteMeta;

class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteLang}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Montserrat&family=Noto+Sans+JP&family=Zen+Maru+Gothic:wght@400;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
