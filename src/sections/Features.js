import React, { Component } from "react";
import styled from "styled-components";
import screen1 from "../assets/images/screentest.png";
import screen2 from "../assets/images/screenshotCustom.png";
import screen3 from "../assets/images/macbook.png";
import arrowRight from "../assets/images/arrowRightCircle.png";
import arrowUp from "../assets/images/arrowUp.png";
import arrowDownPurple from "../assets/images/arrowDownPurple.png";

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
    height: 55vh;
    width: 20vw;
    background-color: white;
    border-radius: 8px;
    padding: 40px;
    border-bottom: 4px solid #ac3fff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  }

  .cardScrolled {
    position: fixed;
    top: 20vh;
    left: calc(10vw + 140px);
  }

  .cardMaxScrolled {
    margin-top: auto;
    margin-bottom: 250px;
  }

  .titleExplain {
    font-family: "Montserrat", sans-serif;
    color: #1b1f3b;
    font-size: 45px;
    line-height: 1.1;
    margin-top: 0;
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
    border: 1px solid #ac3fff;
    border-radius: 24px;
    padding: 5px 0px;
    margin-top: 20px;

    hr {
      width: 100%;
      border: 0.5px solid #ac3fff;
    }

    img {
      height: 30px;
    }

    img:hover {
      opacity: 0.3;
      cursor: pointer;
    }
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
      indexScrolled: props.path[1].pageYOffset / props.path[1].outerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrolled, indexScrolled } = this.state;
    console.log("SCROLLED", indexScrolled);

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
            <div className="arrowsContainer">
              <img src={arrowUp} />
              <hr />
              <img src={arrowDownPurple} />
            </div>
          </div>
          <div
            className={`card ${
              scrolled && indexScrolled >= 3
                ? "cardMaxScrolled"
                : scrolled && "cardScrolled"
            }`}
          >
            <h1 className="titleExplain">
              {indexScrolled < 1.8
                ? "Organize all your files at will"
                : indexScrolled < 2.8
                ? "Fully custom your experience"
                : "Cross platform, macOS and windows"}
            </h1>
            <div className="featureElement">
              <img src={arrowRight} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                fermentum sed sem vel pellentesque. Nunc porta mauris nulla, sit
                amet dapibus arcu elementum ut. Pellentesque habitant morbi.
              </p>
            </div>
            <div className="featureElement">
              <img src={arrowRight} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                fermentum sed sem vel pellentesque. Nunc porta mauris nulla, sit
                amet dapibus arcu elementum ut. Pellentesque habitant morbi.
              </p>
            </div>
            <div className="featureElement">
              <img src={arrowRight} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                fermentum sed sem vel pellentesque. Nunc porta mauris nulla, sit
                amet dapibus arcu elementum ut. Pellentesque habitant morbi.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={screen1} className="screenProduct" />

          <img src={screen2} className="screenProduct" />

          <img src={screen3} className="screenProduct" />
        </div>
      </FeaturesContainer>
    );
  }
}

export default Features;
