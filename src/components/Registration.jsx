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
  const [passwordError,setErrorPassword]= useState(false);



  const router = useRouter()


  async function handleSignUp() {



    if (password !== c_Password) {
      setErrorPassword(true)
      return false
    }
    else {
      setErrorPassword(false)
    }


    if (!email || !password || !c_Password || !name || !address || !fullAddress || !phone) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }


    console.log(email, password, c_Password, name, address, fullAddress, phone)


    let response = await fetch("http://localhost:3000/api/resturant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, address, fullAddress, phone })
    })
    response = await response.json();
    alert("data save successfully");
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setFullAddress("");
    setPhone("")
    console.log("response: ", response)


    if (response.success === true) {

      let { result } = response
      delete result.password

      localStorage.setItem("restrurantUser", JSON.stringify(result))

      router.push("/resturant/dashboard")

    }
  }
console.log("hello")
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
          {
            error && !email && <p className='text-danger'> Email field should not be Empty </p>
          }
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
          {
            error && !password && <p className='text-danger'> Password field should not be Empty </p>
          }
          {
            passwordError && <p className='text-danger'> Password and confirm password should be same </p>
          }
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
          {
            error && !c_Password && <p className='text-danger'> Please Provide your password again for the verification.</p>
          }
          {
            passwordError && <p className='text-danger'> Password and confirm password should be same </p>
          }
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
          {
            error && !name && <p className='text-danger'> Name field should not be Empty </p>
          }
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
          {
            error && !address && <p className='text-danger'> Address field should not be Empty </p>
          }
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
          {
            error && !fullAddress && <p className='text-danger'> FullAddress field should not be Empty </p>
          }
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
          {
            error && !phone && <p className='text-danger'> Phone field should not be Empty </p>
          }
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