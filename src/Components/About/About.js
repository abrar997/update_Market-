import React from "react";
import { Link } from "react-router-dom";
// style
import "./About.css";
const About = () => {
  return (
    <>
      <section className="About-section p-4 ">
        <h3 className=" text-light p-2 " >
          <Link
            to="/Home"
            className="ps-2 text-decoration-none me-3 text-light"
          >
            Home
          </Link>
          / About
        </h3>
        <div>
          <>
            <div className="row p-3">
              <div className="col-lg-6">
                <h2 className="bg-light mt-5">Our Story</h2>
                <p className="fs-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat accusantium sapiente tempora sed dolore esse deserunt
                  eaque excepturi, delectus error accusamus vel eligendi, omnis
                  beatae. Quisquam, dicta. Eos quod quisquam esse recusandae
                  vitae neque dolore, obcaecati incidunt sequi blanditiis est
                  exercitationem molestiae delectus saepe odio eligendi modi
                </p>
              </div>
              <div className="col-lg-6 " >
                <img src={require("../About/AboutImage/b1.jpg")} width='90%' alt="" />
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default About;
