import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
      <main className="font-body w-full">
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </ShopProvider>
  );
}

export default MyApp;
