import React, { Component } from "react";
import styles from "../css/View.module.css";
import Slider from "./Slider";
import IconBox from "./IconBox";
class View extends Component {
  state = {};
  render() {
    return (
      <div className={`${styles.view} ${styles.layout}`}>
        <div className={styles.cover}>
          <svg
            className={styles.wave}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fill-opacity="0.2"
              d="M0,288L60,250.7C120,213,240,139,360,133.3C480,128,600,192,720,197.3C840,203,960,149,1080,112C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <div className={styles.block}></div>
        </div>
        <div className={`${styles.overlay}`}>
          <h1>Take a step back and relax</h1>
          <div className={styles.contentFrame}>
            <h2>I'm feeling ..</h2>
            <IconBox />
            <h2>umm.. I don't know</h2>
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default View;
