// components/Product.tsx
"use client"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

interface ProductProps {
  id: string;
  name: string;
  price: number;
}

const Product = ({ id, name, price }: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
