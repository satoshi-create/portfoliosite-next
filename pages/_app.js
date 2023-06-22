import Layout from "../components/Layout";
import "../styles/globals.css";
// prismjsにテーマを適用
import "prismjs/themes/prism-okaidia.css";
// prismjsに行番号を適用
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { ContedtProvider } from "../libs/context";
function MyApp({ Component, pageProps }) {
  return (
    <ContedtProvider>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </ContedtProvider>
  );
}

export default MyApp;
