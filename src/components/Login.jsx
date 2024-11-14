'use client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")

  async function handleLogin(params) {
    console.log(email,password)
  }

  return (
    <div>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="name@example.com" 
        onChange={(e)=>{setEmail(e.target.value)}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      </Form.Group>
      <Button 
      variant="outline-primary"
      onClick={handleLogin}
      >Login</Button>{' '}
    </Form>
    </div>
  )
}

export default Login
