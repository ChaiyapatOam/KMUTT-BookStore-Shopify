import ShopProvider from "../context/shopContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Head>
        <title>KMUTT BookStore</title>
        <meta name="description" content="KMUTT BookStore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ShopProvider>
  );
}

export default MyApp;
