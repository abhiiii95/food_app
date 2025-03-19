'use client';
import React, { useEffect, useState } from 'react';
import styles from './homeBanner.module.scss';

const HomeBanner = ({restroList}) => {
  const [location,setLocation] = useState([]);
  const [selectedlocation,setSelectedlocation]=useState("Select Location");
  const [showlocation,setShowlocation]= useState(false);  
    useEffect(()=>{
      locationItem()
    },[])
    const locationItem = async()=>{
        let response = await fetch("http://localhost:3000/api/customer/location");
        response= await response.json();
        if(response.success === true){
          setLocation(response.result)
          // setShowlocation(true);
        }
      
    }
    const handleSelected = (item)=>{
      setSelectedlocation(item);
      setShowlocation(false);
      restroList({location:item})
    }
  
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Welcome to Our Food App</h1>
          <form className={styles.form}>
            <input type="text" placeholder="Select Location" value={selectedlocation} onClick={()=>setShowlocation(true)} className={`${styles.input} ${styles?.input1}`} />
            {
              location && showlocation &&
            <ul className={styles?.formUl}>
            { location.map((item)=><li onClick={()=>handleSelected(item)}>{item}</li>)}
            </ul>
            }
            <input type="text" placeholder="Enter Food or resturant name" onChange={(e)=>{restroList({restaurant:e.target.value})}} className={`${styles.input} ${styles?.input2}`} />
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
