import React from 'react'
import "./Subsecribe.css";
const Subsecribe = () => {
    return (
      <section className="Subsecribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 col-xl-6 ">
              <h1>Join our newsletter and get 20% off</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 col-xl-6">
              <form className='shadow p-4'>
                <input
                className='p-1'
                  type="text"
                  width="100%"
                  placeholder="enter your email"
                />{" "}
                <button className='p-1'> send </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Subsecribe
