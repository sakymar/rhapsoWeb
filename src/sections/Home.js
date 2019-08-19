import React from "react";
import styled from "styled-components";
import sort from "../assets/images/sort.svg";
import doubleChevronDown from "../assets/images/doubleChevronDown.png";

const HomeContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  .heroContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10vw;
    height: 70%;
  }

  .heroContent > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heroContent img {
    height: 45vh;
    width: 45vw;
  }

  .goNext {
    margin-top: auto;
    width: 0;
    height: 0;
    border-bottom: 18vh solid #ffd6d5;
    border-left: 100vw solid transparent;
  }

  .goNextIcon {
    position: absolute;
    bottom: 20px;
    height: 40px;
    width: 40px;
    left: calc(50% - 20px);
    margin-top: auto;
  }

  .goNextIcon:hover {
    cursor: pointer;
    opacity: 0.4;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .titleExplain {
    font-family: "Montserrat", sans-serif;
    color: #1b1f3b;
    font-size: 45px;
    line-height: 1.1;
  }

  .separator {
    background-color: #ac3fff;
    width: 120px;
    height: 15px;
    margin-top: -10px;
    margin-bottom: 30px;
  }

  .textExplain {
    max-width: 700px;
    font-size: 18px;
    line-height: 1.8;
    font-family: "Hind", sans-serif;
    color: #595c70;
  }
`;

const Home = () => (
  <HomeContainer>
    <div className="heroContent">
      <div>
        <img src={sort} />
      </div>
      <div className="textContainer">
        <h1 className="titleExplain">
          Struggle to keep your files
          <br /> in order ?
        </h1>
        <div className="separator" />
        <p className="textExplain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          risus diam. Maecenas iaculis sit amet ligula lacinia vestibulum. Morbi
          tempus, ex at pulvinar aliquet, quam risus tristique nisl, a rhoncus
          quam metus vitae velit. Sed varius posuere dignissim. Sed id dictum
          libero. Praesent nunc turpis, ultrices eu dictum eu, tempor vel dolor.
          Integer in massa auctor, posuere quam quis, interdum sem. Proin nec
          pharetra lacus. Ut sit amet erat ut ipsum tempus luctus. Sed sapien
          sem, luctus vitae leo quis, ullamcorper viverra nisi. Morbi imperdiet
          ipsum a nibh convallis dignissim. Donec venenatis vitae dolor pharetra
          ornare. Sed egestas pellentesque est quis mattis.{" "}
        </p>
      </div>
    </div>
    <div className="goNext">
      <img src={doubleChevronDown} className="goNextIcon" />
    </div>
  </HomeContainer>
);

export default Home;
