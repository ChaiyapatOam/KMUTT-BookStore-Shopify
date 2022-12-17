import Image from "next/image";
import { FireIcon } from "@heroicons/react/24/solid";
import ProductCard from "../components/ProductCard";
import NewStudent from "../components/NewStudent";
import { getAllProducts, getProductsInCollection } from "../lib/shopify";

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
                handle={p.node.handle}
                name={p.node.title}
                price={p.node.priceRange.minVariantPrice.amount}
                image={p.node.images.edges[0].node.url}
                available={p.node.availableForSale}
              />
            );
          })}
        </div>
      </div>
      <NewStudent />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  // console.log(products);
  return {
    props: { products }, // will be passed to the page component as props
  };
}
