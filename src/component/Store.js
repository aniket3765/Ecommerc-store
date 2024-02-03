
import Item from './Item';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../Context/CartContext';
import { useContext } from 'react';

const Store = (props) => {
    const cartCTX = useContext(CartContext);
    const storeItems = [

        {
        id:"1",
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        id:"2",
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        id:"3",
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        id:"4",
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];

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
        {storeItems.map(item => <Col><Item id ={item.id}onClick={addItemToCart}src={item.imageUrl} title={item.title} price={item.price}></Item></Col>)}
        </Row>
    </Container>)
}

export default Store;