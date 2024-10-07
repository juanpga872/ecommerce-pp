"use client";

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../app/services/products';
import { Product } from '../app/services/products';
import Navbar from './components/Navbar';
import FormContainer from '../app/components/FormContainer';
import Input from '../app/components/Input';
import Button from '../app/components/Button';
import ProductCard from '../app/components/ProductCard';
import ProductList from '../app/components/ProductList';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../app/redux/slices/cartSlice'; 

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch(); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      quantity: 1
    })); 
  };

  return (
    <div>
      <Navbar />
      <FormContainer>
        <h2>{t('searchProducts')}</h2>
        <form>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchPlaceholder')}
          />
        </form>
      </FormContainer>
      <ProductList>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{t('price')}: ${product.price}</p>
              <p>{product.description}</p>
              <Button onClick={() => handleAddToCart(product)}>{t('addToCart')}</Button>
            </ProductCard>
          ))
        ) : (
          <p>{t('noProductsFound')}</p>
        )}
      </ProductList>
    </div>
  );
};

export default HomePage;






