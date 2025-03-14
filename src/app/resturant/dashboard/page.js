'use client';
import AddFoodItem from '@/components/AddFoodItem/AddFoodItem';
import FoodItemList from '@/components/FoodItemList/FoodItemList';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    const [food,setFood] = useState(false);
    return (
        <div className='container'>
            <h1>Welcome to Dashboard</h1>
            <div className='mb-5'>
            <Button onClick={()=>setFood(true)} className='me-2'>
                Add Food Item
            </Button>
            <Button onClick={()=>setFood(false)}>
                Dashboard
            </Button>
            </div>

            {
            food ? <AddFoodItem setFood={setFood}/>:  <FoodItemList />
            }
        </div>
    )
}

export default Dashboard
