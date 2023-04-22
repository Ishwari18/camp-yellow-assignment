import React from "react";
import vid from "./videoplayback.mp4";
import "./First.css";

export default function First() {
  return (
    <>
      <div className=" main d-flex">
        <div className="video-part">
          <video className="m-5" controls>
            <source src={vid} />
          </video>
          <div className="mx-5 vidtext">Watch this tutorial to get started</div>
        </div>
        <div className="form my-5 ">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter a Name for your App
              </label>
              <input
                type="email"
                className="form-control form-input "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="submit">
              <a href="/next">Submit</a>
            </button>
          </form>
        </div>
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
