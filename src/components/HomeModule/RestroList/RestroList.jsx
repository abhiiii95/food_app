'use client';
import React, { useEffect, useState } from 'react';
import styles from "./restroList.module.scss";
import { Col, Container, Row } from 'react-bootstrap';

const RestroList = ({list,setList}) => {
  
   
  return (
    <>
    <section className={styles?.listWrapper}>
        <Container>
            <Row>
                {
                   list?.map((item,index)=>{
                    return(
                        <>
                        <Col lg={4} key={index}>
                            <div className={styles?.cardWrapper}>
                        <p>{item.name}</p>
                        <p>Contact: {item.phone}</p>
                        <p>{item.address}</p>
                        </div>
                        </Col>
                        </>
                    )
                   }) 
                }
            </Row>
        </Container>
    </section>
      RestroList
    </>
  )
}

export default RestroList
