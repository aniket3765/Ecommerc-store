import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const CartItem = (props) =>{
    console.log(props)
return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.price} X{props.quantity}</Card.Text>
      <Button id={props.id} variant="primary" about={props} onClick={props.onClick}>Buy</Button>
    </Card.Body>
  </Card>
)
}

export default CartItem;