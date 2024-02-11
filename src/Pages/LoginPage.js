import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useRef } from 'react';
import LoginContext from '../Context/LoginContext';
import { render } from 'react-dom';
import App from '../App';

function LoginPage() {
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const loginCtx = useContext(LoginContext)

    if(loginCtx.isLoggedIn){
        console.log(loginCtx.isLoggedIn +"App.js")
      }

    const loginHandler = (event) => {
        event.preventDefault();

     if(1==2)  { 
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcI4ik-JGmcJirDfUK3pnibVIgihAH7c4',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail.current.value,
                password:enteredPassword.current.value,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.ok){
                res.json().then(data=> {
                    console.log(data);
                    loginCtx.login(data.idToken);
                })
            }
            else{
                res.json().then(data=> {
                    console.log(data)
                })
            }
        })}
        else{
            if(!loginCtx.isLoggedIn) loginCtx.login("asdfghjkl");
            else loginCtx.logout()
        }

    }
  return (
    <div className="border d-flex align-items-center justify-content-center">
    <Form style={{width:"30%"}} onSubmit={loginHandler} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={enteredEmail} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={enteredPassword} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default LoginPage;