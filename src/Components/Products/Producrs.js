import React, { useState } from "react";
import products from "./ProductItems/Data";
// style
import "./Products.css";
import { NavLink } from "react-router-dom";
import Categeory from "./ProductItems/Categeory";
import ProductItems from "./ProductItems/ProductItems";
import {
  faGripHorizontal,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductsItemsColumn from "./ProductItems/ProductsItemsColumn";

const Products = () => {
// const [highsetPriceDisplay, sethighsetPriceDisplay] = useState( products.data)
// const [seachHighet, setseachHighet] = useState(products.data)



  //display data as vertical and horizontal
  const [Prodtctshow, setProdtctshow] = useState(<ProductItems />);
  const handleChangeProducts = () => {
    setProdtctshow(<ProductItems />);
  };

  const handleChangeProducts2 = () => {
    setProdtctshow(<ProductsItemsColumn />);
  };

  return (
    <section className="Products">
      <h1 className="text-light p-2 mt-5 fs-4">
        <NavLink
          to="/Home"
          className="activeProducts"
        >
          Home </NavLink> / Products
      </h1>
      <div className="products-items-categeory">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <Categeory />
            </div>
            <div className="col-lg-9">
              <div className="col-lg-4 buttons">
                <button onClick={handleChangeProducts}>
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="col-lg-2 "
                  />
                </button>
                <button onClick={handleChangeProducts2}>
                  <FontAwesomeIcon
                    icon={faGripHorizontal}
                    className="col-lg-2 pl-4"
                  />
                </button>
                <h5>number of products {products.data.length} </h5>
              </div>
              {Prodtctshow}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
