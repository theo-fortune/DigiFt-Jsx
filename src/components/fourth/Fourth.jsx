import React from "react";
import "./fourth.css";
import { arrowRight, arrowRight2, editorFrame } from "../index";

const Fourth = () => {
  return (
    <div classNameName="fourth">
      <div className="fourth__container section-padding">
        <div className="fourth__container_content-left">
          <h1 className="fourth__container_content-left_h1">
            Our API is built to <br />
            be as <span>lightweight </span> <br />
            and efficient <br />
            as possible.
          </h1>
          <p>We offer client and server libraries in everything from our API</p>
          <div className="fourth__container_content-left_button">
            <button className="fourth__container_content-left_button-1">
              Get started
              <img src={arrowRight} alt="arrowRight" />
            </button>
            <button className="fourth__container_content-left_button-2">
              Sign In <img src={arrowRight2} alt="arrowRight2" />
            </button>
          </div>
        </div>
        <div className="fourth_container_content-right">
          <img
            src={editorFrame}
            alt="editorFrame"
          />
        </div>
      </div>
    </div>
  );
};

export default Fourth;
