import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks";

export const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [url, setUrl] = useState(
    `https://fakestoreapi.com/products?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const { data, loading, error } = useFetch(url);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    if (selectedCategory) {
      setUrl(
        `https://fakestoreapi.com/products/category/${selectedCategory}?api_key=${process.env.REACT_APP_API_KEY}`
      );
    } else {
      setUrl(
        `https://fakestoreapi.com/products?api_key=${process.env.REACT_APP_API_KEY}`
      );
    }
  };

  useEffect(() => {
    if (category) {
      setUrl(
        `https://fakestoreapi.com/products/category/${category}?api_key=${process.env.REACT_APP_API_KEY}`
      );
    } else {
      setUrl(
        `https://fakestoreapi.com/products?api_key=${process.env.REACT_APP_API_KEY}`
      );
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{ data, loading, error, category, handleChange }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
