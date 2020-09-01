import React from "react";

const Paragraph = (props) => {
  window.addEventListener("resize", handleResize);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  let h3Style = {
    width: "800px",
    lineHeight: "2",
  };

  if (width < 800) {
    h3Style = {
      width: "100%",
      lineHeight: "2",
      textAlign: "center",
    };
  }
  return <h3 style={h3Style}>{props.text}</h3>;
};

export default Paragraph;
