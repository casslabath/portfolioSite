import React from "react";
import Introduction from "./components/Introduction";
import ProfilePicture from "./components/ProfilePicture";
import HeaderBox from "./components/HeaderBox";
import AboutMe from "./components/AboutMe";
import BodyContainer from "./components/BodyContainer";

const appStyle = {
  position: "relative",
  color: "#3B4759",
  fontFamily: "Calibri",
  backgroundColor: "#FFFFFF",
  left: "-10px",
  top: "-10px",
  width: "100%",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <HeaderBox>
        <Introduction />
        <ProfilePicture />
      </HeaderBox>
      <body>
        <BodyContainer>
          <AboutMe />
        </BodyContainer>
      </body>
    </div>
  );
}

export default App;
