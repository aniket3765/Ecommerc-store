import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const Cart = (props) => {     

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