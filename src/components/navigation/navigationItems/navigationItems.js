import React, { useState, useEffect ,useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import NavigationLayout from "../navigationlayout/navigationlayout";
import {
   handleLogo
} from "../animations/animations";

const NavigationItem = ({ history } ) => {
    console.log(history)

  let logo = useRef(null);
  let menu = useRef(null);
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
    handleLogo(logo , menu)
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo" ref={el => (logo =el)}>
              <Link to="/" >CONFERENCE.</Link>
            </div>
            <div className="menu" ref={el => (menu =el)}>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavigationLayout state={state} />
    </header>
  );
};

export default withRouter(NavigationItem);
