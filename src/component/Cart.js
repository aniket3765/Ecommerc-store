import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';

const Cart = (props) => {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
        
        


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
        <Container>
      <Row>
        {cartElements.map(item => <Col><Item src={item.imageUrl} title={item.title} price={item.price}></Item></Col>)}
        </Row>
    </Container>
    </div>
  );
}

export default Cart;