import React from "react";
import styled from "styled-components";
import logo from "./assets/images/logo.png";
import Home from "./sections/Home";
import Features from "./sections/Features";
import OpenSource from "./sections/OpenSource";
import Download from "./sections/Download";
import { animated, useSpring } from "react-spring";
import { Link, Element } from "react-scroll";

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  color: #1b1f3b;
  overflow-y: auto;
  height: 100%;

  > * {
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* font-family: 'Hind', sans-serif;

font-family: 'Josefin Sans', sans-serif;

font-family: 'Montserrat', sans-serif; */
`;

const Header = styled.header`
  position: fixed;
  z-index: 5;
  height: 80px;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4vw;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  .logo {
    height: 35px;
    width: 30px;
  }

  .title {
    font-size: 24px;
    margin-left: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  .headerRight {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 4vw;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
  }

  .headerRightElement {
    margin-right: 40px;
    font-size: 14px;
  }

  .headerRightElement:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  .downloadButton {
    height: 40px;
    border-radius: 24px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac3fff;
    color: white;
  }

  .downloadButton:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .activeLink {
    text-decoration: underline;
  }
`;

// const scrollTo = () => {
//   scroller.scrollTo("scroll-to-element", {
//     duration: 800,
//     delay: 0,
//     smooth: "easeInOutQuart"
//   });
// };

function App() {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 600 }
  });
  console.log("APP", window);

  return (
    <AppContainer>
      <animated.div style={fadeIn}>
        <Header>
          <img src={logo} className="logo" />
          <h1 className="title">Rhapso FileOrganizer</h1>
          <div className="headerRight">
            <Link smooth={true} to="features" spy={true}>
              <p className="headerRightElement">Features</p>
            </Link>
            <Link smooth={true} to="contribute" spy={true}>
              <p className="headerRightElement">Contribute</p>
            </Link>
            <Link offset={100} smooth={true} to="contribute" spy={true}>
              <p className="headerRightElement">About me</p>
            </Link>
            <Link smooth={true} to="download" spy={true}>
              <div className="downloadButton">
                <p>download the apps</p>
              </div>
            </Link>
          </div>
        </Header>
        <Home />
        <Element name="features">
          {" "}
          <Features />
        </Element>

        <Element name="contribute">
          <OpenSource />
        </Element>
        <Element name="download">
          <Download />
        </Element>
      </animated.div>
    </AppContainer>
  );
}

export default App;
