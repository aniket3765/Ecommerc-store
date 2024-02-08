import { Fragment } from "react";
import Header from "../component/Header"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ContactUs = (e) => {
    const params = useParams()
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const memberDetails = {
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value
        }
        console.log(memberDetails)
        const responce = await fetch('https://ecomstore-http-default-rtdb.firebaseio.com/contact_us.json',{
          method:'POST',
          body:JSON.stringify(memberDetails),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await responce.json();
        console.log(data)
      }
    return<Fragment>
     <Header />
     <h1>{params.productId} </h1>
     <Container>
     <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" type="number" placeholder="Enter Phone" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
     </Fragment>

}

export default ContactUs;