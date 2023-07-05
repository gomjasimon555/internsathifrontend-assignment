import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductProvider from "./context/ProductContext";
import ProductDetailProvider from "./context/ProductDetailContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      
  <ProductProvider>
    <ProductDetailProvider>
      <App />
    </ProductDetailProvider>
  </ProductProvider>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
