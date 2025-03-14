import React, { useEffect, useState } from "react";
import styles from "./foodItemList.module.scss";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FoodItemList = () => {
    const router = useRouter();
  const [foodItem, setFoodItem] = useState();
  useEffect(() => {
    loadFoodItems();
  }, []);
  const loadFoodItems = async () => {
    const resData = JSON.parse(localStorage.getItem("restrurantUser"));
    const resId = resData._id;
    let response = await fetch(
      "http://localhost:3000/api/foods/"+resId
    );
    response = await response.json();
    if (response.success) {
      setFoodItem(response.result);
    } else {
      alert("Food item list not loading");
    }
  };
  
  const deleteFoodItem =  async (id)=>{
    let response = await fetch("http://localhost:3000/api/foods/"+id,{
        method:"delete",
    })
    response = await response.json()
    if(response.success){
        loadFoodItems()
    }
    else{
        alert("Food Item not deleted")
    }
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {foodItem?.map((val, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{val?.name}</td>
                  <td>{val?.price}</td>
                  <td>{val?.description}</td>
                  <td><Image src={val?.img_path} height={40} width={80}/></td>
                  <td>
                    <Button className="me-3" variant="dark" onClick={()=>deleteFoodItem(val._id)}>
                      Delete
                    </Button>
                    <Button variant="dark" onClick={()=>router.push("/resturant/dashboard/"+val._id)}>Edit</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FoodItemList;
