
import Item from './Item';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../Context/CartContext';
import { useContext, useEffect, useState } from 'react';

const Store = (props) => {
    const cartCTX = useContext(CartContext);
    const [storeItems, setStoreItems] = useState([]);
    // const storeItems = [

    //     {
    //     id:"1",
    //     title: 'Colors',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
    //     },
        
    //     {
    //     id:"2",
    //     title: 'Black and white Colors',
        
    //     price: 50,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
    //     },
        
    //     {
    //     id:"3",
    //     title: 'Yellow and Black Colors',
        
    //     price: 70,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
    //     },
        
    //     {
    //     id:"4",
    //     title: 'Blue Color',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
    //     }
        
    //     ];

       
       const getProducts =  async ()=> {
            const responce = await fetch('https://ecomstore-http-default-rtdb.firebaseio.com/products.json').catch(error=> console.log(error));
            const data = await responce.json();
            const allProduct = [];
            for(let key in data){
                allProduct.push({
                    id:key,
                    title:data[key].title,
                    imageUrl:data[key].imageUrl,
                    price:data[key].price
                })
            }
           return setStoreItems(allProduct)
            }
        
          getProducts();
    


        const addItemToCart = (e) => {
            
            for (const item of storeItems) {
                if (item.id == e.target.id) {
                    cartCTX.addItemToCart(item)
                    break;
                }
                continue;
            }
        }


        
        
    
return ( <Container>
      <Row>
        {storeItems.map(item => <Col><Item id ={item.id} onBuy={addItemToCart} src={item.imageUrl} title={item.title} price={item.price}></Item></Col>)}
        </Row>
    </Container>)
}

export default Store;