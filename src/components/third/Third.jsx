import React from 'react';
import './third.css';
import { firstSec, secondSec } from '../index';
const Third = () => {
  return (
    <div classNameName="third section-padding">
      <div className="third__container">
        <img src={firstSec} alt="firstSec" className="mid-images" />
        <img src={secondSec} alt="secondSec" className="mid-images" />
      </div>
    </div>
  );
}

export default Third