import './App.css';
import Header from './component/Header'
import Store from './component/Store';
import CartProvider from './Context/CartProvider';

function App() {

    return (
  <CartProvider>
     <Header/>
     <Store/>
  </CartProvider>
   
  );

}

export default App;
