import React from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";

export function Products(props) {
  const handleProductClick = () => {
    // Handle the click event here, e.g., open a product details modal
    console.log("Product clicked:", props.product_name);
  
    <div>
      <h1>Product Name: {props.product_name}</h1>
    </div>
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
