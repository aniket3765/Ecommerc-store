import { useState } from 'react';
import CartContext from './CartContext'

const CartProvider =(props) => {
    const existingCartItems = localStorage.getItem('cartItems');
    const data =( existingCartItems==null)? []: JSON.parse(existingCartItems);
    const [cartItems, setCartItems] = useState(data); 
    const existingAmount = localStorage.getItem('totalAmount');  
    const [totalAmount, setTotalAmount] = useState(existingAmount)
        const addTotal = (price) => {
            const newTotalAmount = +totalAmount+price;
            setTotalAmount(newTotalAmount);
            localStorage.removeItem('totalAmount');
            localStorage.setItem('totalAmount',newTotalAmount);
        }

        const addItemToCart = (item) => {
           
             const  existingItemId = cartItems.findIndex(i => i.id===item.id)
               let newCartItems, newCartItem;
               if(existingItemId === -1){
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
               localStorage.removeItem('cartItems')
               localStorage.setItem('cartItems',JSON.stringify(newCartItems))
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