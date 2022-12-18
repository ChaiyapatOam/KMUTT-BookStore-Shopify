import React from "react";
import Link from "next/link";
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import Cart from './Cart'

const Navbar = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })
  return (
    <div>
      <div className="bg-header p-6 ">
        <img className="h-[60px] pl-4" src="/kmutt-logo.png" alt="kmutt" />
      </div>
      <div className="bg-navbar text-white text-xl font-bold flex ">
        <div className="p-6 py-3 flex-shrink">
          <a className="px-4" href="/">
            Home
          </a>
        </div>
        <div className="p-6 py-3 flex-shrink">
          <a className="px-3" href="">
            Check order
          </a>
        </div>
        <div className="p-6 py-3 flex-grow">
          <a className="px-3" href="">
            New Student
          </a>
        </div>
        <div className="p-6 py-3 ">
          <a
            className="text-md font-bold cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            ตะกร้า ({cartQuantity})
          </a>
          <Cart cart={cart}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
