import React from 'react'
import { sunSolid, moonSolid } from '../index'
import './navbar.css'

const toggle = () => {
  return (
    <div className="theme-switch-wrapper">
      <input type="checkbox" className="checkbox" id="chk" />
      <label className="label" for="chk">
        <img src={sunSolid} alt="sun-solid" />
        <img src={moonSolid} alt="moon-solid" />
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default toggle