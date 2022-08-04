import React from 'react';
import './hero.css';
import { img, arrowRight, arrowRight2, wide } from "../index";

const hero = () => {
  return (
    <div className="body__content section-padding">
      <div className="body__content-left">
        <h1>
          Expand the giftcard industry, 
          <span className="body__content-left_h1_span"> one card</span> at a time &nbsp;
          <img
            src={wide}
            alt="widestar"
            className="body__content-left_img"
          />
        </h1>
        <p>
          Digift helps businesses connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>
        <div className="starter">
          <button className="starter_btn-1">
            Get started
            <img src={arrowRight} alt="arrow-right" />
          </button>
          <button className="starter_btn-2">
            Sign In <img src={arrowRight2} alt="arrowRight2" />
          </button>
        </div>
      </div>
      <div className="body__content-right">
        <img src={img} alt="img" className="body__content-right-img" />
      </div>
    </div>
  );
}

export default hero