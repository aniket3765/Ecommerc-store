import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const Cart = (props) => {  

    const cartCTX = useContext(CartContext);
    const addToCart = (item) => {
           cartCTX.addItemToCart(item)
    }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
         

         <Modal size="lg" show={props.cart} onHide={props.onClick}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
      <Row>
        {cartCTX.cartItems.map(item => <Col><CartItems id={item.id} quantity={item.quantity} onClick ={addToCart} src={item.imageUrl} title={item.title} price={item.price}></CartItems></Col>)}
        </Row>
        <h2>Toatal: {cartCTX.totalAmount}</h2>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onClick}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
  );
}

export default Cart;