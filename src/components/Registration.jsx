"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registration = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = () => {
    console.log(email, password, cPassword, city, name, address, phone);
  };

  return (
    <div className="registerForm">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-primary" onClick={handleSubmit}>
          Sign Up
        </Button>{" "}
      </Form>
    </div>
  );
};

export default Registration;
