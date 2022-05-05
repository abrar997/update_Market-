import React from "react";
import products from "./ProductItems/Data";
const DetailsProduct = () => {

  return (
    <div className="container">
      <div className="row">
        {products.data
          // .filter((card) => card.id === id)
          .map((cardDetail, ind) => {
            return (
              <div key={ind}>
                <img src={cardDetail.img} alt="" />
                <h1>{cardDetail.text} </h1>
                <p>{cardDetail.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DetailsProduct;
