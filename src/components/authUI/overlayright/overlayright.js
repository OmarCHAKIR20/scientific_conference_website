import React from "react";

export const Overlayright = (props) => {
  return (
    <div className="overlay-panel overlay-right">
      <h1>Hello!</h1>
      <p>Enter your personal details and join our conference</p>
      <button className="ghost" onClick={props.clic}>
        Sign Up
      </button>
    </div>
  );
};

export default Overlayright