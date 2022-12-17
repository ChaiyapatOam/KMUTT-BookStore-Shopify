import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopProvider from "../context/shopContext";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const meta = {
    title: "KMUTT BookStore",
    description:
      "KMUTT BookStore eCommerce Website Made by Next.js, Shopify, TailwindCSS, GraphQL.",
    url: "https://kmutt-book-store-shopify.vercel.app",
    image: "https://kmutt-book-store-shopify.vercel.app/Banner.png",
  };
  return (
    <ShopProvider>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="description"
          content="KMUTT BookStore eCommerce Website Made by Next.js, Shopify, TailwindCSS, GraphQL. "
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:description"
          content="KMUTT BookStore eCommerce Website Made by Next.js, Shopify, TailwindCSS and GraphQL. "
        />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content={meta.title} />
      </Head>
      <NextSeo
        title={meta.title}
        titleTemplate={meta.title}
        defaultTitle={meta.title}
        description={meta.url}
        canonical={meta.url}
        openGraph={{
          url: meta.url,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: meta.image,
              width: 800,
              height: 420,
              alt: meta.title,
            },
          ],
        }}
      />
      <main className="font-body w-full">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ShopProvider>
  );
}

export default MyApp;
