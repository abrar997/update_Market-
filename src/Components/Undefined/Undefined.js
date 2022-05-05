import React from "react";
import img1 from "./imagenotfound/img2.png";
import { NavLink } from "react-router-dom";

const error_page = {
  textAlign: "center",
  marginTop: "200px",
  textTransform: "capitalize",
};
const Undefined = () => {
  return (
    <>
      <div style={error_page}>
        <div className="container">
          <div className="row">
            <h1>
              welcome in our shop ,enjoy shopping with us.
              <br />
              <NavLink to="/Home" activeClassName="mt-4">start shopping now</NavLink>
            </h1>
            <img alt="" src={img1} style={{ width: "50%", margin: "auto" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Undefined;
