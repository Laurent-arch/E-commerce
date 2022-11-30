import React from "react";
import Card from "./Card";
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {

    const data = [
        {
        id: 1,
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        title: "Long Sleeve t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
        },
        {
        id: 1,
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        title: "Long Sleeve t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
        },
        {
        id: 1,
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        title: "Long Sleeve t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
        },
        {
        id: 1,
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        title: "Long Sleeve t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
        },
    ]
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. 
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;