"use client"; // Añade esta línea

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <nav>
      <h1>My Shop</h1>
      <p>Cart: {cartItems.length} items</p>
    </nav>
  );
};

export default Navbar;