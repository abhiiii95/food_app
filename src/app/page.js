'use client';
import MainHeader from "@/components/MainHeader/MainHeader";
import HomeBanner from "@/components/HomeModule/HomeBanner/HomeBanner";
import RestroList from "@/components/HomeModule/RestroList/RestroList";
import { useEffect, useState } from "react";

export default function Home() {
  const [list,setList]= useState([]);
  useEffect(()=>{
    restroList()
},[])
const restroList = async (params)=>{

    let url = "http://localhost:3000/api/customer";
    console.log(params)
    if(params?.location){
        url = url+"?location="+params.location
    }
    else if(params?.restaurant){    
        url = url+"?restaurant="+params?.restaurant
    }
    console.log(url,"url")
    let response =  await fetch(url);
    response = await response.json();
    if(response.success){
        setList(response.result);
    }
}

  return (
    <>
    <MainHeader />
    <HomeBanner list={list} setList={setList} restroList={restroList}/>  
    <RestroList list={list} setList={setList}/>
    </>
  );
}
