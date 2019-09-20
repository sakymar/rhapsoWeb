import React from "react";
import styled from "styled-components";
import githubLogo from "../assets/images/github-logo.svg";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import wave from "../assets/images/wave.svg";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";

const OpenSourceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;

  #wave {
    position: relative;
    height: 80px;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    background: rgba(248, 223, 230, 1);
  }

  #wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: calc(52% + 32px);
    height: 80px;
    background-color: white;
    right: -30px;
    top: 40px;
  }

  #wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: calc(51% + 40px);
    height: 90px;
    background-color: rgba(248, 223, 230, 1);
    left: -25px;
    top: 25px;
  }

  .content {
    width: calc(60vw + 240px);
    margin-left: calc(20vw - 120px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 15vh;
  }

  .card {
    height: 55vh;
    width: 20vw;
    padding: 40px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }

  .cardActive {
    z-index: 2;
    height: 60vh;
    margin-top: -2vh;
  }

  .titleExplain {
    font-family: "Montserrat", sans-serif;
    color: #1b1f3b;
    font-size: 30px;
    line-height: 1.1;
    margin-top: 0;
  }

  .separator {
    background-color: #ac3fff;
    width: 80px;
    height: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #ac3fff;
  }

  .ballInactive {
    background-color: #babbc4;
  }

  .horizontalBar {
    width: 3px;
    height: 50px;
    background-color: #babbc4;
  }

  .roadmapContent {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    align-items: flex-start;
  }

  .roadmapNumbers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .roadmapText {
    margin-left: 20px;
    font-size: 16px;
    line-height: 1.3;
    font-family: "Hind", sans-serif;
    color: #595c70;

    .inactive {
      opacity: 0.5;
    }

    p {
      margin-bottom: 30px;
      font-family: "Hind", sans-serif;
      margin-top: 0px;
    }
  }

  @media (max-width: 1800px) {
    .roadmapText {
      font-size: 12px;
      line-height: 1.2;
    }
  }

  .textOpenSource {
    font-size: 20px;
    line-height: 1.6;
    font-family: "Hind", sans-serif;
    color: #595c70;
    margin-top: 0px;
    margin-bottom: 40px;
  }

  @media (max-width: 1800px) {
    .textOpenSource {
      font-size: 16px;
      line-height: 1.4;
    }
  }

  .githubLogo {
    width: 50%;
    height: 20%;
    margin-left: 25%;
  }

  .githubLogo:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .socialLogoContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .socialLogo {
    width: 80px;
    height: 80px;
  }

  .downloadButton {
    height: 50px;
    border-radius: 24px;
    width: 120px;
    margin-left: calc(50% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac3fff;
    color: white;
    text-transform: uppercase;
  }

  .downloadButton:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .waveTest {
    margin-top: -50px;
    transform: rotate(180deg);
    img {
      height: 205px;
      width: 100%;
    }
  }
`;

const OpenSource = () => (
  <OpenSourceContainer>
    <div className="waveTest">
      <img src={wave} />
    </div>
    <VisibilitySensor once>
      {({ isVisible }) => (
        <Spring
          config={{ duration: 300 }}
          delay={0}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)"
          }}
        >
          {props => (
            <div style={props} className="content">
              <div className="card">
                <h1 className="titleExplain">Roadmap</h1>
                <div className="separator" />
                <div className="roadmapContent">
                  <div className="roadmapNumbers">
                    <div className="ball ballInactive">
                      <p>1</p>
                    </div>
                    <div className="horizontalBar" />
                    <div className="ball">
                      <p>2</p>
                    </div>
                    <div className="horizontalBar" />
                    <div className="ball">
                      <p>3</p>
                    </div>
                    <div className="horizontalBar" />
                    <div className="ball">
                      <p>4</p>
                    </div>
                  </div>
                  <div className="roadmapText">
                    <p className="inactive">
                      Official release of the app,Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nam vitae risus diam.
                      Maecenas
                    </p>
                    <p>
                      Version with trackers and automated rules,Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam vitae
                      risus diam. Maecenas iaculis sit amet
                    </p>
                    <p>
                      Your own ideas and features, Official release of the
                      app,Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nam vitae risus
                    </p>
                    <p>
                      Pushing forward code quality and maintenance,Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam vitae
                      risus diam. Maecenas
                    </p>
                  </div>
                </div>
              </div>
              <div className="card cardActive">
                <h1 className="titleExplain">The project is open source</h1>
                <div className="separator" />
                <p className="textOpenSource">
                  Which means it is fully accessible<strong> to anyone</strong>{" "}
                  and that it is <strong>free</strong> and always will be.
                </p>
                <p className="textOpenSource">
                  Everyone can <strong>contribute</strong> to the project and
                  are encouraged to, follow the instructions to start working
                  with the community
                </p>
                <img src={githubLogo} className="githubLogo" />
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large"
                  frameborder="0"
                  scrolling="0"
                  width="160px"
                  height="30px"
                  style={{ marginLeft: "calc(50% - 80px)", marginTop: "10px" }}
                />
              </div>
              <div className="card">
                <h1 className="titleExplain">Give your support</h1>
                <div className="separator" />
                <p className="textOpenSource">
                  Just by spreading the word, <strong>share it</strong> on your
                  networks to make the apps more known
                </p>
                <div className="socialLogoContainer">
                  <img src={facebook} className="socialLogo" />

                  <img src={twitter} className="socialLogo" />

                  <img src={instagram} className="socialLogo" />
                </div>
                <p className="textOpenSource" style={{ marginTop: "20px" }}>
                  Or consider giving a <strong>tip</strong>, that will me
                  motivate to work and maybe allocate some professional time on
                  the project
                </p>
                <div className="downloadButton">
                  <p>donate</p>
                </div>
              </div>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  </OpenSourceContainer>
);

export default OpenSource;
