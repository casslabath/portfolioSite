import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: props.size,
        height: props.size,
        left: props.left,
        top: props.top,
        background: props.background,
        display: props.display,
        borderRadius: "300px",
        padding: "0px",
        margin: "0px",
        border: "0px",
      }}
    ></div>
  );
};

export default Circle;
