'use client';
import { usePathname } from 'next/navigation';

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  const [details,setDetails]= useState();
  const router = useRouter();
  const pathname =usePathname();
  useEffect(()=>{
    let data = localStorage.getItem("restrurantUser");
    if(!data && pathname == "/resturant/dashboard"){
      router.push("/resturant")
    }
    else if(data && pathname == "resturant"){
      router.push("/resturant/dashboard");
    }
    else{
      setDetails(JSON.parse(data))
    }
  },[])
  const logOut =()=>{
    localStorage.removeItem("restrurantUser");
    router.push("/resturant")

  }
  return (
    <Container>
    <div className='d-flex justify-content-between'>
      Food App 
      <ul className='d-flex gap-4'>
        <li className='list-style-none'>Home</li>
        {
          details && details.name ?
          <>
           <li>
          <button onClick={logOut}>
            log out
          </button>
        </li>
          <li>
          <button>
            Profile
          </button>
        </li>
          </>:
        <li>
          <button>
            Login/Sign Up
          </button>
        </li>
        }
        
      </ul>
         </div>
         </Container>
  )
}

export default Header
