import React from "react";
import styled from "styled-components";
import apple from "../assets/images/apple.png";
import windows from "../assets/images/windows.svg";

const DownloadContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Hind", sans-serif;
  display: flex;
  flex-direction: column;

  .content {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    > div {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }

  .downloadButton {
    height: 60px;
    border-radius: 32px;
    margin-top: 50px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac3fff;
    color: white;
    font-family: "Hind", sans-serif;
    font-size: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .downloadButton:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .title {
    font-family: "Montserrat", sans-serif;
    color: #1b1f3b;
    font-size: 45px;
    line-height: 1.1;
    margin-bottom: 150px;
  }

  .bottom {
    background: repeating-linear-gradient(
      135deg,
      #ffd6d5,
      #ffd6d5 2px,
      white 4px,
      white 6px
    );
    margin-top: auto;
    width: 100%;
    height: 100px;
  }
`;

const Download = () => (
  <DownloadContainer>
    <h1 className="title">Download the available apps</h1>
    <div className="content">
      <div>
        <img src={apple} />
        <div className="downloadButton">download the mac version</div>
        <p>Mac OS X 10.9+</p>
      </div>

      <div>
        <img src={windows} />
        <div className="downloadButton">download the windows version</div>
        <p>Windows 10</p>
      </div>
    </div>
    <div className="bottom" />
  </DownloadContainer>
);

export default Download;
