import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { LoginContextProvider } from './Context/LoginContext';
import CartProvider from './Context/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <LoginContextProvider>
    <App />
    </LoginContextProvider>
    </CartProvider>
  </React.StrictMode>
);
