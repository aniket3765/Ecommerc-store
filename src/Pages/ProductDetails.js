import { useEffect, useState } from "react"
import Header from "../component/Header";
import Item from "../component/Item";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import CartProvider from "../Context/CartProvider";

const ProductDetails = () => {
        const params = useParams();
        const [item, setItem] = useState({});
            async function  getProductDetails (){
                const responce = await fetch('https://ecomstore-http-default-rtdb.firebaseio.com/products/'+params.productId+'.json');
                const data = await responce.json();
                setItem(data)
            }
            

           useEffect(()=> { getProductDetails();})
    return <CartProvider>
        <Header />
        <Item id ={item.id} src={item.imageUrl} title={item.title} price={item.price} details={false}></Item>
         <h1>{item.title}</h1>
    <Card body>Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.</Card>
    </CartProvider>
}

export default ProductDetails;