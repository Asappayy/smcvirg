import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../lib/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        {/* <Link href="/">SMC</Link> */}
        <Image
            src="/images/smlog.png" // Correct path for images in the public folder
            alt="SMC Logo"
            width={100} // Set appropriate width
            height={100} // Set appropriate height
          />
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar