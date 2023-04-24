import React from "react";
import "./Second.css";
import img1 from "./images/1-removebg-preview (1).png";
import img2 from "./images/2-removebg-preview.png";
import img3 from "./images/3-removebg-preview.png";
import filmroll from "./images/film-roll.png";
import star from "./images/single_star.png";
import heart1 from "./images/heart1.png";
import heart2 from "./images/heart2.png";
import pc from "./images/pc.png";
import gamectrl from "./images/game-controller.png";

export default function Second() {
  return (
    <>
      <div className="main">
        <div className="first-row d-flex">
          <button style={{ color: "white" }} className="back-btn ">
            <a href="/camp-yellow-assignment">Back</a>
          </button>
          <div style={{ fontSize: "30px" }}>Update Game Files</div>
          <button
            style={{ color: "white" }}
            className="download-btn "
            id="myBtn"
          >
            <a href="">Download</a>
          </button>
          <div id="myModal" className="modal">
            <p>Click here to download the Sample Files</p>
          </div>
        </div>
        <div className="second-row d-flex">
          <div className="card">
            <div className="card-body">
              <p className="card-text">Upload game story</p>
              <div className="images ">
                <img id="starimg1" src={star} />
                <img id="filmroll" src={filmroll} />
                <img id="starimg2" src={star} />
              </div>
              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button type="button" id="custom-btn">
                  Choose a File
                </button>
              </div>
            </div>
          </div>
          <div className="card ">
            <div className="card-body">
              <p className="card-text">Upload game Assets</p>
              <div className="images">
                <img id="heart2a" src={heart2} />
                <img id="pc" src={pc} />
                <img id="heart2b" src={heart2} />
              </div>
              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button type="button" id="custom-btn">
                  Choose a File
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Upload App Icon</p>
              <div className="images">
                <img id="heart1a" src={heart1} />
                <img id="gamectrl" src={gamectrl} />
                <img id="heart1b" src={heart1} />
              </div>
              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button type="button" id="custom-btn">
                  Choose a File
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="final-btn m-5 ">Create Your Game</button>
      </div>

      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
      <section id="slant"></section>
      <section id="leftest"></section>
    </>
  );
}
