// src/services/products.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }



export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://192.168.88.39:7000/auth/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

  