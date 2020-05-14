import React from "react";
import styles from "../../css/home.module.css";

export default function HowContainer() {
  return (
    <div className={styles["how-container"]}>
      <div className={styles["how-top-row"]}>
        <div className={styles["how-top-left-col"]}>
          <h1>HOW OSC WORKS?</h1>
          <p>
            Some random text about how we function. What all things we do and
            how It will benefit ou.t. Below are a few processes on how we
            function.Some random text about how we function. What all things we
            do and how It will benefit ou.t. Below are a few processes on how we
            function.Some random text about how we function.
          </p>
        </div>
        <div className={styles["how-top-right-col"]}>
          <img alt="how-right-SVG.png" src="/images/how-right-SVG.png" />
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="container-part"> Follow Your Own Path</h1>
        <p className="container-sub-part">
          You will have the city at your fingertips with some simple touches!
        </p>
      </div>
      <div className={styles["how-bottom-row"]}>
        <div className="view view-first">
          <img
            className="img-avatar"
            alt="left-svg"
            src="images/about-left-SVG.png"
          />
          <div className="mask">
            <h2>OpenSource</h2>
            <p>opensource.com</p>
            <h3>Work #1</h3>
            <p>
              We can do this and that In this way so as contain our knowledge
              and have a goodnights sleep
            </p>
          </div>
        </div>
        <div className="view view-first">
          <img
            className="img-avatar"
            alt="left-svg"
            src="images/about-left-SVG.png"
          />
          <div className="mask">
            <h2>OpenSource</h2>
            <p>opensource.com</p>
            <h3>Work #2</h3>
            <p>
              We can do this and that In this way so as contain our knowledge
              and have a goodnights sleep
            </p>
          </div>
        </div>
        <div className="view view-first">
          <img
            className="img-avatar"
            alt="left-svg"
            src="images/about-left-SVG.png"
          />
          <div className="mask">
            <h2>OpenSource</h2>
            <p>opensource.com</p>
            <h3>Work #3</h3>
            <p>
              We can do this and that In this way so as contain our knowledge
              and have a goodnights sleep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
