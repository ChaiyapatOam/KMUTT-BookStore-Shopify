import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FireIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductCard from "../components/ProductCard";
import product from "../data/product";
import NewStudent from "../components/NewStudent";
import { getAllProducts } from "../lib/shopify";
export default function Home({ products }) {
  return (
    <div className="font-body">
      <div className="p-6">
        <div className="popular pl-4 flex flex-start">
          <h1 className="text-4xl font-bold">Popular</h1>
          <FireIcon className="h-10 w-8 text-orange" />
        </div>

        {/* Product */}
        <div className="p-5 grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 ">
          {products.map((p, idx) => {
            return (
              <ProductCard
                key={idx}
                id={p.node.id}
                name={p.node.title}
                price={p.node.priceRange.minVariantPrice.amount}
                image={p.node.images.edges[0].node.url}
              />
            );
          })}
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] max-h-[20rem] dark:bg-gray-800 dark:border-gray-700 hover:border-orange">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
          <div className="p-3 flex justify-between items-center">
            <span className="text-black  tracking-tight mb-1 dark:text-white">
              <h4 className="text-black font-bold text-2xl tracking-tight mb-2 dark:text-white">
                Test Mode
              </h4>
              <p className="text-xl">12345 ฿</p>
            </span>
            <div className="h-10 w-10 text-orange cursor-pointer">
              <ShoppingCartIcon />
            </div>
          </div>
        </div>
        {JSON.stringify(products)}
      </div>
      <NewStudent />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  console.log(products);
  return {
    props: { products }, // will be passed to the page component as props
  };
}
