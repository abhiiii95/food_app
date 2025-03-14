import EditFoodItem from '@/components/EditFoodItem/EditFoodItem'
import React from 'react'

const EditItemPage = ({params}) => {
    console.log(params,"params")
  return (
    <div>
        
        <EditFoodItem urlId = {params.id} />
    </div>
  )
}

export default EditItemPage
