import React from "react";

const Introduction = () => {
  window.addEventListener("resize", handleResize);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  let infoStyle = {
    position: "relative",
    left: "400px",
    display: "flex",
    flexDirection: "column",
  };

  if (width < 800) {
    infoStyle = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    };
  }

  return (
    <div style={infoStyle}>
      <h1 style={{ fontSize: "48px", marginBottom: "5px", marginTop: "70px" }}>
        I'm Cassie Labath
      </h1>
      <h3 style={{ fontSize: "20px", marginTop: "5px" }}>
        Computer Science major, <br />
        developer and designer
      </h3>
    </div>
  );
};

export default Introduction;
