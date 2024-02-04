import { useState } from 'react';
import CartContext from './CartContext'

const CartProvider =(props) => {
    const [totalAmount, setTotalAmount] = useState(200)
    const [cartItems, setCartItems] = useState([
        {
        id:"1",
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        
        }]);

        const addTotal = (price) => {
            const newTotalAmount = totalAmount+price;
            setTotalAmount(newTotalAmount);
        }

        const addItemToCart = (item) => {
             const  existingItemId = cartItems.findIndex(i => i.id==item.id)
               let newCartItems, newCartItem;
               if(existingItemId == -1){
                newCartItem = {
                    ...item,
                    quantity:1
                }
                newCartItems = [...cartItems, newCartItem];
                addTotal(newCartItem.price);
                setCartItems(newCartItems);
               }
               else{
                newCartItem = {...cartItems[existingItemId]};
                newCartItem.quantity = newCartItem.quantity+1;
                newCartItems = [...cartItems];
                newCartItems[existingItemId] = newCartItem;
                addTotal(newCartItem.price);
                setCartItems(newCartItems);
               }
        }

        const removeItemFromCart = (id) => {};


    const cartContext = {
    cartItems:cartItems,
    totalAmount:totalAmount,
    addItemToCart:addItemToCart,
    removeItemFromCart:removeItemFromCart
    }

    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;