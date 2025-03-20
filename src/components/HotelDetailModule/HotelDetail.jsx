'use client';
import React, { useEffect, useState } from 'react';
import styles from "./hotelDetail.module.scss";

const HotelDetail = ({name,params,prop}) => {
    const [restroDetail,setRestroDetail]= useState();
    const [foodItem,setFoodItem]= useState([])
    useEffect(()=>{
        loadRestroDetail()
    },[]);

    const loadRestroDetail = async()=>{
        const id = prop.searchParams.id;
        console.log(id)
        let response = await fetch("http://localhost:3000/api/customer/"+id);
        response = await response.json();
        console.log(response,"response")
        if(response.success){
            setRestroDetail(response.details);
            setFoodItem(response.foodItems)
        }
    }
    // console.log(restroDetail.details?,foodItem)
  return (
    <>
      <h1>{name}</h1>
      {/* <p>Contact Us - {restroDetail.phone}</p> */}
    </>
  )
}

export default HotelDetail
