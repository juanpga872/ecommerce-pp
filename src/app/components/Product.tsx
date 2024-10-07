"use client";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

interface ProductProps {
  id: number;
  title: string; 
  price: number;
}

const Product = ({ id, title, price }: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, quantity: 1 }));
  };

  return (
    <div>
      <h3>{title}</h3> 
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

