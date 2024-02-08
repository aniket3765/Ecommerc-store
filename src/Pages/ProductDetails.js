import { Fragment, useState } from "react"
import Header from "../component/Header";
import Item from "../component/Item";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
        const params = useParams();
        const [item, setItem] = useState({});
            async function  getProductDetails (){
                const responce = await fetch('https://ecomstore-http-default-rtdb.firebaseio.com/products/'+params.productId+'.json');
                const data = await responce.json();
                setItem(data)
            }

            getProductDetails();

    return <Fragment>
        <Header />
        <Item id ={item.id} src={item.imageUrl} title={item.title} price={item.price}></Item>
    </Fragment>
}

export default ProductDetails;