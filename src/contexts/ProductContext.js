import React, { createContext, useEffect, useState, useContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (searchQuery) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ products, filteredProducts, handleSearchInputChange }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;