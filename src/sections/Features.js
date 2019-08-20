import React, { Component } from "react";
import styled from "styled-components";
import screen1 from "../assets/images/screentest.png";
import screen2 from "../assets/images/screenshotCustom.png";
import screen3 from "../assets/images/macbook.png";
import arrowRight from "../assets/images/arrowRightCircle.png";
import arrowUp from "../assets/images/arrowUp.png";
import arrowDownPurple from "../assets/images/arrowDownPurple.png";
import Scroll from "react-scroll";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";

const FeaturesContainer = styled.div`
  width: 100vw;
  height: 300vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > * {
    justify-content: center;
    align-items: center;
  }

  .screenProduct {
    margin-top: 25vh;
    margin-bottom: 28vh;
    height: 500px;
    width: 880px;
  }

  @media (max-width: 1399px) {
    .screenProduct {
      height: 300px;
      width: 500px;
    }
  }

  @media (max-width: 1600px) and (min-width: 1400px) {
    .screenProduct {
      height: 400px;
      width: 750px;
    }
  }

  /* background-color: #ffd6d5; 
  */

  background: rgb(255, 214, 213);
  background: linear-gradient(
    167deg,
    rgba(255, 214, 213, 1) 40%,
    rgba(248, 223, 230, 1) 100%
  );

  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20vh;
    /* background: repeating-linear-gradient(
      135deg,
      #ffd6d5,
      #ffd6d5 2px,
      white 4px,
      white 6px
    ); */
  }

  .card {
    height: 60vh;
    width: 20vw;
    background-color: white;
    border-radius: 8px;
    padding: 40px;
    border-bottom: 4px solid #ac3fff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
  }

  .cardScrolled {
    position: fixed;
    top: 15vh;
    left: calc(10vw + 140px);
  }

  .cardMaxScrolled {
    margin-top: auto;
    margin-bottom: 250px;
  }

  .titleExplain {
    p {
      font-family: "Montserrat", sans-serif;
      color: #1b1f3b;
      font-size: 45px;
      line-height: 1.1;
      margin-top: 0;
      font-weight: bold;
    }
  }

  .textTest {
    animation-duration: 1s;
    animation-name: fadeInOut;
  }
  @keyframes fadeInOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .featureElement {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 40px;
    }
    p {
      font-size: 16px;
      line-height: 1.4;
      font-family: "Hind", sans-serif;
      color: #595c70;
      max-width: 80%;
      margin-left: 10%;
    }
  }

  @media (max-width: 1600px) {
    .titleExplain {
      p {
        font-size: 38px;
      }
    }

    .featureElement {
      p {
        font-size: 14px;
        line-height: 1.3;
      }
    }
  }

  .scroller {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    min-width: 40px;
    margin-right: 100px;
    margin-left: 10vw;
    margin-top: 15vh;
  }

  .scrollerScrolled {
    position: fixed;
    top: 25vh;
    left: 0;
  }

  .scrollerMaxScrolled {
    margin-top: auto;
    margin-bottom: 400px;
  }

  .ball {
    background-color: #828494;
    border-radius: 50%;
    min-width: 10px;
    min-height: 10px;
  }

  .ballActive {
    background-color: #ac3fff;
  }

  .horizontalBar {
    height: 30px;
    width: 2px;
    background-color: #828494;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .arrowsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ac3fff;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 5px 0px;
    margin-top: 20px;

    img {
      height: 30px;
    }

    img:hover {
      opacity: 0.3;
      cursor: pointer;
    }
  }

  .disabledArrow {
    background: repeating-linear-gradient(
      135deg,
      #ffd6d5,
      #ffd6d5 2px,
      white 4px,
      white 6px
    );

    img {
      opacity: 0.5;
    }
  }

  .disabledArrow img:hover {
    opacity: 0.5;
    cursor: initial;
  }

  .downArrow {
    margin-top: 0px;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(props) {
    this.setState({
      scrolled:
        props && props.path && props.path[1]
          ? props.path[1].pageYOffset > props.path[1].outerHeight
          : false,
      indexScrolled: props.path[1].pageYOffset / props.path[1].outerHeight,
      position: props.path[1].pageYOffset
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrolled, indexScrolled, position } = this.state;
    console.log("SCROLLED", indexScrolled);
    console.log("POSITION", position, window.innerHeight);
    console.log(
      "TO SCROLL",
      position + window.innerHeight - ((position + 10) % window.innerHeight)
    );

    return (
      <FeaturesContainer>
        <div className="left">
          <div
            className={`scroller ${
              scrolled && indexScrolled >= 3
                ? "scrollerMaxScrolled"
                : scrolled && "scrollerScrolled"
            }`}
          >
            <div className={`ball ballActive`} />
            <div className="horizontalBar" />
            <div className={`ball ${indexScrolled > 1.8 && "ballActive"}`} />
            <div className="horizontalBar" />
            <div className={`ball ${indexScrolled > 2.8 && "ballActive"}`} />
            <div
              className={`arrowsContainer ${indexScrolled < 1.2 &&
                "disabledArrow"}
              `}
            >
              <img
                onClick={
                  indexScrolled >= 1.2
                    ? () =>
                        Scroll.animateScroll.scrollTo(
                          position - (position % window.innerHeight)
                        )
                    : undefined
                }
                src={arrowUp}
              />
            </div>
            <div
              className={`arrowsContainer downArrow ${indexScrolled > 3 &&
                "disabledArrow"}
              `}
            >
              <img
                onClick={() =>
                  indexScrolled <= 3
                    ? Scroll.animateScroll.scrollTo(
                        position +
                          10 +
                          window.innerHeight -
                          ((position + 10) % window.innerHeight)
                      )
                    : undefined
                }
                src={arrowDownPurple}
              />
            </div>
          </div>
          <div
            className={`card ${
              scrolled && indexScrolled >= 3
                ? "cardMaxScrolled"
                : scrolled && "cardScrolled"
            }`}
          >
            <VisibilitySensor once>
              {({ isVisible }) => (
                <Spring
                  config={{ duration: 600 }}
                  delay={200}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(50px)"
                  }}
                >
                  {props => (
                    <React.Fragment>
                      {indexScrolled < 1.8 && (
                        <div id="t1" style={props} className="titleExplain">
                          <p className="textTest">
                            Organize all your files at will
                          </p>
                        </div>
                      )}
                      {indexScrolled < 2.8 && indexScrolled > 1.8 && (
                        <div id="t2" style={props} className="titleExplain">
                          <p className="textTest">
                            Fully custom your experience
                          </p>
                        </div>
                      )}
                      {indexScrolled > 2.8 && (
                        <div id="t3" style={props} className="titleExplain">
                          <p className="textTest">On macOS and windows</p>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor once>
              {({ isVisible }) => (
                <Spring
                  config={{ duration: 600 }}
                  delay={400}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(10px)"
                  }}
                >
                  {props => (
                    <div>
                      {" "}
                      <div style={props} className="featureElement">
                        <img className="textTest" src={arrowRight} />
                        <p className="textTest">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis fermentum sed sem vel pellentesque. Nunc
                          porta mauris nulla, sit amet dapibus arcu elementum
                          ut. Pellentesque habitant morbi.
                        </p>
                      </div>
                      <div style={props} className="featureElement">
                        <img src={arrowRight} />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis fermentum sed sem vel pellentesque. Nunc
                          porta mauris nulla, sit amet dapibus arcu elementum
                          ut. Pellentesque habitant morbi.
                        </p>
                      </div>
                      <div style={props} className="featureElement">
                        <img src={arrowRight} />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis fermentum sed sem vel pellentesque. Nunc
                          porta mauris nulla, sit amet dapibus arcu elementum
                          ut. Pellentesque habitant morbi.
                        </p>
                      </div>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div className="right">
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring
                config={{ duration: 500 }}
                delay={0}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0,0)"
                    : "translate3d(50px,50px,0)"
                }}
              >
                {props => (
                  <img style={props} src={screen1} className="screenProduct" />
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring
                config={{ duration: 500 }}
                delay={0}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0,0)"
                    : "translate3d(50px,50px,0)"
                }}
              >
                {props => (
                  <img style={props} src={screen2} className="screenProduct" />
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring
                config={{ duration: 500 }}
                delay={0}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0,0)"
                    : "translate3d(50px,50px,0)"
                }}
              >
                {props => (
                  <img style={props} src={screen3} className="screenProduct" />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </FeaturesContainer>
    );
  }
}

export default Features;
