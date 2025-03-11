'use client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';;


const Registration = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_Password, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [fullAddress, setFullAddress] = useState('')
  const [phone, setPhone] = useState('');
  const [error,setError] = useState(false);
  const [passwordError,setPasswordError]= useState(false);


  const router = useRouter()


  async function handleSignUp() {
    if(password !== c_Password){
      setPasswordError(true);
      return false;
    }
    else{
      setPasswordError(false)
    }
    if(!email || !password || !c_Password || !name || !address || !fullAddress || !phone){
      setError(true);
      return false;
    }
    else{
      setError(false)
    }
    console.log(email, password, c_Password, name, address, fullAddress, phone)


    let response = await fetch("http://localhost:3000/api/resturant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, address, fullAddress, phone })
    })
    response = await response.json()
    console.log("response: ", response)
    alert("data save successfully")

    if (response.status === true) {

      let { result } = response
      delete result.password

      localStorage.setItem("restrurantUser", JSON.stringify(result))

      router.push("/resturant/dashboard")

    }
    // setEmail('')
    // setPassword('')
    // setConfirmPassword('')
    // setName('')
    // setAddress('')
    // setFullAddress('')
    // setPhone('')


  }

  return (
    <div>
      <Form>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        {
          error && !email && <p className='text-danger'>please enter email</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        {
          passwordError && <p className='text-danger'>Password and Confirm password not match </p>
        }
          {
          error && !password && <p className='text-danger'>please enter password</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={c_Password}
          />
        </Form.Group>
        {
          passwordError && <p className='text-danger'>Password and Confirm password not match </p>
        }
           {
          error && !c_Password && <p className='text-danger'>please enter confirm password</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Name</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        {
          error && !name && <p className='text-danger'>please enter name</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Address</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </Form.Group>
        {
          error && !address && <p className='text-danger'>please enter address</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Full Address</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setFullAddress(e.target.value)}
            value={fullAddress}
          />
        </Form.Group>
        {
          error && !fullAddress && <p className='text-danger'>please enter fullAddress</p>
        }

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="inputPassword5">Phone Number</Form.Label>
          <Form.Control
            type="number"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </Form.Group>
        {
          error && !phone && <p className='text-danger'>please enter phone</p>
        }


        <Button
          variant="outline-primary"
          onClick={handleSignUp}
        >Sign Up</Button>{' '}
      </Form>
    </div>
  )
}

export default Registration