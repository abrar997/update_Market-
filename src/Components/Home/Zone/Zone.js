import React from "react";
// react-router
import { Link } from "react-router-dom";
// style
import "./StyleZone.css";
// img
import img1 from "./ZoneImages/img1.jpeg";
const Zone = () => {
  return (
    <section className="zone-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8  text-center col-xs-12 col-sm-12 col-md-12 col-xl-6 text-zone">
            <h1  className="fs-2">Design Your Comfort <br /> Zone</h1>
            <Link to="/Products">
              <button>start now</button>
            </Link>
          </div>
          <div className="col-lg-2  col-sm-12 col-md-12 mt-5 col-xl-6 image-zone">
            <img src={img1} width="70%" height={"90%"} className="position-relative img1"  alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Zone;
