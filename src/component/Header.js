import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useContext, useState } from 'react';
import logo from '../favicon.ico'
import { Link, useNavigate } from 'react-router-dom';
import LoginContext from '../Context/LoginContext';
import { Container} from 'react-bootstrap';
import Cart from './Cart';

const Header = () => {

   const [cart, setCart] = useState(false);
   const handleCart = () => setCart(!cart);
   const loginCtx = useContext(LoginContext);
   const navigate = useNavigate();
   const logoutHandler = () => {
    loginCtx.logout();
    navigate('/');
   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Nav.Item>
        <Navbar.Brand style={{fontSize:'42px'}}><img
      src={logo}
      width="50"
      height="50"
      alt='Colors Item'
    />Colors Item</Navbar.Brand>
      </Nav.Item>  
      {/* <Nav variant='tabs'>
      <Nav.Item as="li"><Nav.Link><Link to="/About_US" ><Button size='sm'>About</Button></Link></Nav.Link></Nav.Item>  
      <Nav.Item as="li">
        <Nav.Link><Link to="/Store"  ><Button size='sm'> Store </Button></Link></Nav.Link>
      </Nav.Item>
        <Link to="/Contact_Us" ><Button size='sm' style={{width:'150%'}}> Contact us </Button></Link>
        <Nav.Item as="li">
        <Nav.Link>
      <Button variant="success" onClick={handleCart}> Cart</Button>
      </Nav.Link></Nav.Item>
      <Nav.Item as="li">
        <Nav.Link><Button variant='danger' size='sm' onClick={logoutHandler}>Logout</Button></Nav.Link>
      </Nav.Item>
      <Cart onClick={handleCart} cart={cart} />
  </Nav> */}

<Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link ><Link style={{color:'black', textDecoration: 'none'}} to="/home">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link ><Link style={{color:'black', textDecoration: 'none'}} to="/Store">Store</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link style={{color:'black', textDecoration: 'none'}} to="/About_US">About us</Link> </Nav.Link>
      </Nav.Item>
      <Nav.Item >
      <Nav.Link eventKey="link-2">
      <Link style={{color:'black', textDecoration: 'none'}} to="/Contact_Us">Contact us </Link></Nav.Link>
      </Nav.Item>
    </Nav>
    <Container style={{position: 'absolute', right:'10%', padding:'10px', width:'10%'}}>
        <Button variant="success" onClick={handleCart}> Cart</Button>
        <Button variant='danger' size='sm' onClick={logoutHandler}>{loginCtx.isLoggedIn ? "Logout": "Login"}</Button>
      
    
    
    </Container>
    <Cart onClick={handleCart} cart={cart} />
    </Navbar>
  );
}

export default Header;