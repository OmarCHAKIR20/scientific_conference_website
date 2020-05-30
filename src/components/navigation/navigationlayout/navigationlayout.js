import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";


import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "../animations/animations";

import newyork from "../../../assets/newyork.webp";
import moscow from "../../../assets/moscow.jpg";
import beijing from "../../../assets/beijing.webp";
import Essaouira from "../../../assets/essaouira.jpg";
import Casablanca from "../../../assets/casablanca.jpg";

const cities = [
  { name: "Casablanca", image: Casablanca }, //morocco
  { name: "Essaouira", image: Essaouira }, //morocco
  { name: "New York", image: newyork }, //usa
  { name: "Moscow", image: moscow }, //russia
  { name: "Beijing", image: beijing }, //china
];

const NavigationLayout = ({ state }) => {
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);
  
    useEffect(() => {
      // If the menu is open and we click the menu button to close it.
      if (state.clicked === false) {
        // If menu is closed and we want to open it.
  
        staggerRevealClose(reveal2, reveal1);
        // Set menu to display none
        gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      } else if (
        state.clicked === true ||
        (state.clicked === true && state.initial === null)
      ) {
        // Set menu to display block
        gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
        //Allow menu to have height of 100%
        gsap.to([reveal1, reveal2], {
          duration: 0,
          opacity: 1,
          height: "100%",
        });
        staggerReveal(reveal1, reveal2);
        fadeInUp(info);
        staggerText(line1, line2, line3);
      }
    }, [state]);
  

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
    <div ref={(el) => (reveal2 = el)} className="menu-layer">
      <div
        ref={(el) => (cityBackground = el)}
        className="menu-city-background"
      ></div>
      <div className="container">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                <NavLink
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    to="/committes"
                  >
                    committes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    to="/Speakers"
                  >
                    Speakers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                    to="/Submit"
                  >
                    Join us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line3 = el)}
                    to="/Program"
                  >
                    Program
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div ref={(el) => (info = el)} className="info">
              <h3><span>About</span> Us</h3>
              <p>
                The 7th International Conference on Automation, Control
                Engineering & Computer Science (ACECS-2020) has many partners
                especially: Yildiz University
                International Centre for Innovation & Development (ICID),
                Yildiz Technical University. Authors are invited to start by
                submitting their abstracts  or full papers in
                English before 20 May 2020. Final version should be submitted
                before 20 June 2020.
              </p>
            </div>
            <div className="editions">
              Previous editions:
              {/* Returning the list of cities */}
              {cities.map((el) => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleCity(el.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}
                >
                  {el.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref={(el) => (reveal1 = el)}
      className="menu-secondary-background-color"
    ></div>
  </div>
               
    
  );
};

export default NavigationLayout;