import React from "react";

const bodyStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const BodyContainer = (props) => {
  return <div style={bodyStyle}>{props.children}</div>;
};

export default BodyContainer;
