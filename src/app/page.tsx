"use client"
// src/app/page.tsx
import { useEffect, useState } from 'react';
import { fetchProducts } from '../app/services/products';
import { Product } from '../app/services/products';
import Navbar from './components/Navbar';
import FormContainer from '../app/components/FormContainer';
import Input from '../app/components/Input';
import Button from '../app/components/Button';
import ProductCard from '../app/components/ProductCard';
import ProductList from '../app/components/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Estado para los productos
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Efecto para obtener los productos cuando la página se carga
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts(); // Obtener los productos de la API
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);

  // Filtrar los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar /> {/* Componente Navbar */}
      <FormContainer>
        <h2>Search Products</h2>
        <form>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a product..."
          />
        </form>
      </FormContainer>
      <ProductList>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <Button>Add to Cart</Button>
            </ProductCard>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ProductList>
    </div>
  );
};

export default HomePage;
