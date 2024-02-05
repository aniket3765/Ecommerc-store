import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import logo from '../favicon.ico'
import { Modal } from 'react-bootstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {

  const [cart, setCart] = useState(false);
   const handleCart = () => setCart(!cart);
  const target = useRef(null)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Nav.Item>
        <Navbar.Brand><img
      src={logo}
      width="30"
      height="30"
      alt='Colors Item'
    />Colors Item</Navbar.Brand>
      </Nav.Item>
      <div className="container">   
     <Nav.Item><Link to="/About_US">About US</Link></Nav.Item>
     <Nav.Item><Link to="/Home">Home</Link></Nav.Item>
     <Nav.Item><Link to="/Store">Store</Link></Nav.Item> 
      <Button variant="primary" onClick={handleCart}> Cart</Button>
   
      <Modal size="lg" show={cart} onHide={handleCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Cart/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCart}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      </Container>
    </Navbar>
  );
}

export default Header;