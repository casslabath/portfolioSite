import React from "react";
import Circle from "./Circle";

const HeaderBox = (props) => {
  window.addEventListener("resize", handleResize);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  let headerStyle = {
    position: "relative",
    width: "110%",
    height: "300px",
    left: "0px",
    overflow: "hidden",
    top: "-5px",

    background: "#F5F5F5",
  };

  if (width < 800) {
    headerStyle = {
      position: "relative",
      width: "110%",
      height: "500px",
      left: "0px",
      overflow: "hidden",
      top: "-5px",

      background: "#F5F5F5",
    };
  }

  return (
    <div style={headerStyle}>
      {props.children}
      {width > 800 && (
        <React.Fragment>
          <Circle size="250px" background="#FEDCDC" top="-80px" />
          <Circle size="150px" background="#76C2AF" top="-70px" left="120px" />
          <Circle size="250px" background="#FEDCDC" top="60px" left="1300px" />
          <Circle size="400px" background="#76C2AF" top="200px" left="1050px" />
        </React.Fragment>
      )}
    </div>
  );
};

export default HeaderBox;
