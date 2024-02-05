import Header from '../component/Header'
import Store from '../component/Store';
import CartProvider from '../Context/CartProvider';
import MyFooter from '../component/MyFooter';

const StorePage = () => {
    return  <CartProvider>
       <Header/>
        <Store/>
        <MyFooter />
     </CartProvider>
}

export default StorePage;