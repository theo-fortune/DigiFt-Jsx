import React from "react";
import "./second.css";
import { starStroke, save, rectangle } from "../index";

const Second = () => {
  return (
    <div className="second">
      <div
        className="second__container"
        style={{
          backgroundImage: `url(${rectangle})`,
        }}
      >
        <div className="second__container-content">
          <div className="second__container-content-first">
            <p>
              <img src={starStroke} alt="starStroke" /> Digift helps businesses
            </p>
          </div>
          <div className="second__container-content-second">
            <h1>
              Why do fast-growing merchant and vendor choose
              <img
                src={save}
                alt="save"
                className="second__container-content-second_img"
              />
              us?
            </h1>
          </div>
          <div className="second__container-content-third">
            <p>
              Whether you’re a business looking to sell your own gift cards, a
              company looking for bulk gift card solution, digift is for you.
            </p>
            <u>
              <a href="h">Create an account today</a>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
