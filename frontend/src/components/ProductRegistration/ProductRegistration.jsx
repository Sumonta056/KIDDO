import React, { useState } from "react";
import styles from "../ProductRegistration/ProductRegistration.module.css"; // Keep the import path as-is
import ProductRegistrationValidation from "./ProductRegistrationValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductRegistration() {
  console.log("Rendering ProductRegistration");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_quality: "",
    product_type: "",
    product_price: "",
    product_image:"",
  });

  const [errors, setErrors] = useState({
    product_name: "",
    product_description: "",
    product_quality: "",
    product_type: "",
    product_price: "",
    product_image:"",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     

    console.log(formData);
    // Wait until the errors are set
    const validationErrors = ProductRegistrationValidation(formData);
    setErrors(validationErrors);

    console.log(validationErrors);

    // Use async/await to ensure state is updated

  
        console.log(formData);
        axios
          .post("http://localhost:3001/ProductRegistration", formData)
          .then((res) => {
            if (res.data === "product_registration_success") {
              navigate("/");
              alert("আপনি সফলভাবে প্রোডাক্ট নিবন্ধন করেছেন");
            } else {
              alert("নিবন্ধন ব্যর্থ হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন");
            }
          });
    
  };

  return (
    <div className={styles.RegistrationScreen}>
      <div className={styles.productContainer}>
        <div className={styles.productFormContainer} id="productFormContainer">
          <form className={styles.productForm} onSubmit={handleSubmit}>
            <h1 className={styles.productHead}>প্রোডাক্টের নিবন্ধন ফর্ম</h1>
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}>
                প্রোডাক্টের নাম
              </p>
              <input
                type="text"
                id="product_name"
                name="product_name"
                value={formData.product_name}
                onChange={handleInputChange}
              />
              {errors.product_name && (
                <span className={styles.productError}>
                  {errors.product_name}
                </span>
              )}
            </div>
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}>
                প্রোডাক্টের বর্ণনা 
              </p>
              <input
                type="text"
                id="product_description"
                name="product_description"
                value={formData.product_description}
                onChange={handleInputChange}
              />
              {errors.product_description && (
                <span className={styles.productError}>
                  {errors.product_description}
                </span>
              )}
            </div>
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}>কোয়ালিটি </p>
              <input
                type="text"
                id="product_quality"
                name="product_quality"
                value={formData.product_quality}
                onChange={handleInputChange}
              />
              {errors.product_quality && (
                <span className={styles.productError}>
                  {errors.product_quality}
                </span>
              )}
            </div>
          
            
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}> ধরণ</p>
              <select
                className={styles.productSelect}
                id="product_type"
                name="product_type"
                value={formData.product_type}
                onChange={handleInputChange}
              >
                <option value="">প্রোডাক্টের ধরণ বাছাই করুন</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Play">Play</option>
         
              </select>
              {errors.product_type && (
                <span className={styles.productError}>
                  {errors.product_type}
                </span>
              )}
            </div>
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}>
                মূল্য 
              </p>
              <input
                type="text"
                id="product_price"
                name="product_price"
                value={formData.product_price}
                onChange={handleInputChange}
              />
              {errors.product_price && (
                <span className={styles.productError}>
                  {errors.product_price}
                </span>
              )}
            </div>
            <div className={styles.productInfield}>
              <p className={styles.productParagraph}>
              প্রোডাক্টের ছবি  
              </p>
              <input
                type="text"
                id="product_image"
                name="product_image"
                value={formData.product_image}
                onChange={handleInputChange}
              />
              {errors.product_image && (
                <span className={styles.productError}>
                  {errors.product_image}
                </span>
              )}
            </div>

            <button type="submit" className={styles.productButton}>
              নিবন্ধন
            </button>
          </form>
        </div>
        <div className={styles.productOverlayContainer} id="overlayCon">
          <div className={styles.productOverlay}>
            <div
              className={`${styles.productOverlayPanel} ${styles.productOverlayRight}`}
            >
              <div className={styles.productFormImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRegistration;