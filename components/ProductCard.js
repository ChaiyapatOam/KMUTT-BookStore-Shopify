import React from "react";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import Image from "next/image";
const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] max-h-[20rem] dark:bg-gray-800 dark:border-gray-700 hover:border-orange">
      <div className="relative h-[14rem]">
        <Image
          className="h-full"
          src={
            image ? image : "https://flowbite.com/docs/images/blog/image-1.jpg"
          }
          fill
          style="cover"
          alt={name}
        />
      </div>
      <div className="p-3 flex justify-between items-center">
        <span className="text-black  tracking-tight mb-1 dark:text-white">
          <h4 className="text-black font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {name}
          </h4>
          <p className="text-xl">{price} ฿</p>
        </span>
        <div className="h-10 w-10 text-orange cursor-pointer">
          <ShoppingCartIcon onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
