"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import styled from 'styled-components';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/slices/cartSlice';
import Button from './Button'; 

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ProductDetails>
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </ProductDetails>
                <QuantityControls>
                  <Button onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
                </QuantityControls>
                <Button onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
              </CartItem>
            ))}
          </CartItems>
          <TotalPrice>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </TotalPrice>
        </>
      )}
    </CartContainer>
  );
};

export default CartPage;

// Estilos usando Styled Components
const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  flex: 2;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    color: #777;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 1.2rem;
  }
`;

const TotalPrice = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
`;
