
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  button {
    align-self: center;
  }
`;

export default ProductCard;
