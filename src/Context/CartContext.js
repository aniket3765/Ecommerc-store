import React from "react";

const CartContext = React.createContext({
    cartItems:[],
    totalAmount:0,
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    getCart:()=>{},
    setCart:()=>{}
})

export default CartContext;