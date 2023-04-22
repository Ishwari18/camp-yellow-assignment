import React from "react";
import "./Second.css";
import img1 from './images/1-removebg-preview (1).png';
import img2 from './images/2-removebg-preview.png';
import img3 from './images/3-removebg-preview.png';

export default function Second() {
  return (
    <>
      <div className="main"> 
        <div className="first-row d-flex">
          <button style={{ color: "white" }} className="back-btn ">
            <a href="/">Back</a>
          </button>
          <div style={{ fontSize: "30px"}}>Update Game Files</div>
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
          <div className="card" style={{ width: "18rem", height: "14rem" }}>
            <div className="card-body">
              <p className="card-text" >
                Upload game story 
              </p>
              <img src={img1} />

              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button
                  type="button"
                  id="custom-btn"
                  
                >
                  Choose a File
                </button>
              </div>
            </div>
          </div>
          <div className="card " style={{ width: "18rem", height: "14rem" }}>
            <div className="card-body">
              <p className="card-text" >
                Upload game Assets
              </p>
              <img src={img2} />

              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button
                  type="button"
                  id="custom-btn"
                  
                >
                  Choose a File
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", height: "14rem" }}>
            <div className="card-body">
              <p className="card-text" >
                Upload App Icon
              </p>
              <img src={img3} />

              <div className="upload-btns">
                <input type="file" id="real-file" hidden="hidden" />
                <button
                  type="button"
                  id="custom-btn"
                >
                  Choose a File
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="final-btn m-5 " >Create Your Game</button>
      </div>
    </>
  );
}
