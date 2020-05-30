import React, { useRef, useState } from "react";
import Login from '../login/login';
import Register from '../register/register';
import Overlayleft from '../overlayleft/overlayleft';
import Overlayright from '../overlayright/overlayright'


const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
 
  let first_div = useRef(null);

  const handleLayer = () => {
    if (isLogin === true) {
      first_div.classList.add("right-panel-active");
      setIsLogin(false);
    } else if (isLogin === false) {
      first_div.classList.remove("right-panel-active");
      setIsLogin(true);
    }
  };
 

  return (
    <div className="main-container ">
      <p style={{color : 'red'}}>
        {" "}
        Authors are invited to start by submitting their abstracts  or
        full papers in English before 20 May 2020. Final version should be
        submitted before 20 June 2020 .
      </p>
      <div className="container" ref={(elt) => (first_div = elt)}>
        <Register stateProp={isLogin} />
        <Login  stateProp={isLogin} />
        <div className="overlay-container">
          <div className="overlay">
            <Overlayleft clic={handleLayer}   />
            <Overlayright clic={handleLayer}  />
          </div>
        </div>
      </div>
    </div>
  );
};



export default (Form);

