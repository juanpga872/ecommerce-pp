import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <NavBarContainer>
      <LogoContainer>
        <Link href="/">
          <Logo>MyShop</Logo>
        </Link>
      </LogoContainer>
      <Menu>
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/register">register</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/cart">Cart ({cartItems.length})</Link>
        </MenuItem>
      </Menu>
    </NavBarContainer>
  );
};

export default Navbar;

// Estilos para el Navbar usando Styled Components
const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ffcc00;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      color: #ffcc00;
    }
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const CartIcon = styled.span`
  margin-right: 0.5rem;
`;

const CartCount = styled.span`
  background-color: #ffcc00;
  border-radius: 50%;
  padding: 0.3rem 0.6rem;
  color: #333;
  font-weight: bold;
`;
