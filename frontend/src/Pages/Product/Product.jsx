import React from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export function Products(props) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Get the product name from props or wherever it's available
    const productName = props.product_name;

    // Display an alert with the product name
    alert("Do want to confirm purchase of " + productName + " ?");

    alert("Congratulations! You successfully purchased " + productName);

    navigate("/");
  };
  const starIcons = Array.from(
    { length: props.product_quality },
    (_, index) => <FaStar key={index} />
  );

  return (
    <div className="productCard" onClick={handleProductClick}>
      <img
        src={props.product_image}
        alt="product-img"
        className="productImage"
      />
      <FaShoppingCart className={"productCard__cart"} />
      <FaRegBookmark className={"productCard__wishlist"} />
      <FaFireAlt className={"productCard__fastSelling"} />
      <div className="productCard__content">
        <h3 className="productName">{props.product_name}</h3>
        <div className="displayStack__1">
          <div className="productPrice">${props.product_price}</div>
          <div className="productSales">Type: {props.product_type}</div>
        </div>
        <div className="displayStack__2">
          <div className="productRating">{starIcons}</div>
          <div className="productTime">
            Quality: {props.product_description}
          </div>
        </div>
      </div>
    </div>
  );
}
