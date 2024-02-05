import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import logo from '../favicon.ico'
import { Modal } from 'react-bootstrap';

const Cart = (props) => {  
    
    const [cart, setCart] = useState(false);
   const handleCart = () => setCart(!cart);
  const target = useRef(null)

    const cartCTX = useContext(CartContext);
    const addToCart = (e) => {
        console.log(e.target, cartCTX.cartItems)
    }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
         
        <Container>
      <Row>
        {cartCTX.cartItems.map(item => <Col><CartItems quantity={item.quantity} onClick ={addToCart} src={item.imageUrl} title={item.title} price={item.price}></CartItems></Col>)}
        </Row>
        <h2>Toatal: {cartCTX.totalAmount}</h2>
        </Container>
        
    </div>
  );
}

export default Cart;