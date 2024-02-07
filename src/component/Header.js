import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useState } from 'react';
import logo from '../favicon.ico'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {

  const [cart, setCart] = useState(false);
   const handleCart = () => setCart(!cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Nav.Item>
        <Navbar.Brand><img
      src={logo}
      width="30"
      height="30"
      alt='Colors Item'
    />Colors Item</Navbar.Brand>
      </Nav.Item>  
      <Nav>
      <Nav.Item as="li"><Nav.Link><Button size='sm'><Link to="/About_US" style={{color:"white"}}>About</Link></Button></Nav.Link></Nav.Item>  
      <Nav.Item as="li">
        <Nav.Link><Button size='sm'><Link to="/" style={{color:"white"}}>Home</Link></Button></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link><Button size='sm'> <Link to="/Store" style={{color:"white"}} >Store</Link> </Button></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link><Button size='sm'> <Link to="/Contact_Us" style={{color:"white"}} >Contact us</Link> </Button></Nav.Link>
      </Nav.Item>
      <Button variant="success" size='lg' onClick={handleCart}> Cart</Button>
      <Cart onClick={handleCart} cart={cart} />
    </Nav>
      {/* <Nav className="me-auto" >
     <Nav.Item><Button size='sm'><Link to="/About_US" style={{color:"white"}}>About</Link></Button></Nav.Item>  
     <Nav.Item ><Button size='sm'><Link to="/Home" style={{color:"white"}}>Home</Link></Button></Nav.Item>
     <Button size='sm'> <Link to="/Store" style={{color:"white"}} >Store</Link> </Button>
      <Button variant="success" size='lg' onClick={handleCart}> Cart</Button>
      <Cart onClick={handleCart} cart={cart} />
      </Nav> */}
    </Navbar>
  );
}

export default Header;