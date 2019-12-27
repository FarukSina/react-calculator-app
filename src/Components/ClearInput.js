import React from "react";
import "./ClearInput.css";
const ClearInput = props => {
  return (
    <div
      className="clear-input"
      onClick={props.handleClear}
      style={{ cursor: "pointer" }}
    >
      {props.children}
    </div>
  );
};
export default ClearInput;
