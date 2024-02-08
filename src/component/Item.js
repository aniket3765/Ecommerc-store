import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Item = (props) =>{

return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.price}</Card.Text>
      <Button id={props.id} variant="primary" about={props} onClick={props.onBuy}>Buy</Button>
      <Link to={'/Store/'+props.id} style={{color:"white"}}> <Button id={props.id} variant="primary" about={props}>Details</Button></Link>
    </Card.Body>
  </Card>
)
}

export default Item;