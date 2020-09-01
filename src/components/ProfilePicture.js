import React from "react";
import profilePic from "./../assets/profilePic.png";

const ProfilePicture = () => {
  window.addEventListener("resize", handleResize);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  let imageContainer;

  let profileStyle = {
    position: "relative",
    width: "250px",
    height: "250px",
    top: "-180px",
    left: "900px",
    borderRadius: "30px",
  };

  if (width < 800) {
    profileStyle = {
      width: "250px",
      height: "250px",
      borderRadius: "30px",
    };

    imageContainer = {
      textAlign: "center",
    };
  }

  return (
    <div style={imageContainer}>
      <img src={profilePic} style={profileStyle}></img>
    </div>
  );
};

export default ProfilePicture;
