import React from "react";
import Paragraph from "./../components/Paragraph";
import JavaBubble from "./../assets/java bubble.png";
import JSBubble from "./../assets/js bubble.png";
import HTMLBubble from "./../assets/html bubble.png";

const AboutMe = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>About Me</h2>
      <Paragraph
        text="My name is Cassie Labath and I am a senior at Iowa State University
        studying Computer Science. I graduate early May, 2021 and wish to land a
        job working front end or full stack development in the Greater Seattle
        area. Not only do I love solving problems and developing solutions, but
        developing for style and usibility as well. From my time as a user
        experience intern I learned the value of design and how important it is
        to remain inclusive and concerned about accessability in software
        design. I wish to work as a developer and designer, making elegant
        solutions for all types of different users."
      />
      <div style={{ textAlign: "center" }}>
        <img src={JavaBubble} />
        <img src={JSBubble} />
        <img src={HTMLBubble} />
      </div>
    </div>
  );
};

export default AboutMe;
