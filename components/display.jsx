import React from "react";

export default function Display(props) {
 
  return (
    <>
      <input
        type="placeholder"
        value={props.name}
        id="display"
        className="input_values"
      />
    </>
  );
}
