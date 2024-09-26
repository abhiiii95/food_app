'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Login from '@/components/Login';
import Registration from '@/components/Registration';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const RasturantPage = () => {
  const [login,setLogin] = useState(true);
  return (
    <>
    <div className='restroPage'>
      <h1>Resturant logIn/ SignUp Page</h1>
      {
        login ?  <Login /> : <Registration />
      }
      <Button onClick={()=>{setLogin(!login)}}>{login ? "Please Sign Up":"Please Login "}</Button>
      </div>
      
    </>
  )
}

export default RasturantPage
