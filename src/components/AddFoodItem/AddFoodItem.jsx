"use client";
import { useState } from "react";
import styles from "./addFoodItem.module.scss"; // Import SCSS module
import { useRouter } from "next/router";


const AddFoodItem = ({setFood}) => {
   
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) errors.price = "Valid price is required";
    if (!formData.image.trim()) errors.image = "Image URL is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    let resto_id;
    const restaurantData = localStorage.getItem("restrurantUser");

    if (restaurantData) {
      const parsedData = JSON.parse(restaurantData);
      resto_id = parsedData?._id;
    }
   


    try {
      const response = await fetch("http://localhost:3000/api/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          price: formData.price,
          img_path: formData.image,
          description: formData.description,
          resto_id,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Food Item Added Successfully");
        setFormData({ name: "", price: "", image: "", description: "" });
        setErrors({});
        setFood(false)
      } else {
        alert("Failed to add food item");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add Food Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.price && <p className={styles.error}>{errors.price}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
            rows="3"
          />
          {errors.description && <p className={styles.error}>{errors.description}</p>}
        </div>
        <button type="submit" className={styles.button}>Save</button>
      </form>
    </div>
  );
};

export default AddFoodItem;
