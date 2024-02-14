import { useContext } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Item = (props) =>{
  const cartCtx = useContext(CartContext);
  const item = {
    key:props.itemKey,
    id: props.id,
    title:props.title,
    imageUrl:props.src,
    price:props.price
}
  const onClickHandler = () => {
    cartCtx.addItemToCart(item) 
  
     }


return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
     <Card.Text>{props.price}</Card.Text>
      <Button id={props.id} variant="primary" onClick={onClickHandler}>Buy</Button>
      {props.details && <Link to={'/Store/'+props.itemKey} style={{color:"white"}}> <Button id={props.id} variant="primary">Details</Button></Link>}
    </Card.Body>
  </Card>
)
}

export default Item;