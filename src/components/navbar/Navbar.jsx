import { React, useState } from "react";
import "./navbar.css";
import {
  Vector,
  Logo,
  searchIcon,
  sunSolid,
  moonSolid,
  sparkles,
} from "../index";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { Pivot as Hamburger } from "hamburger-react";
// import Toggle from "./Toggle";


const Navbar = () => {
  // const chk = document.getElementById("chk");
  // chk.addEventListener("change", () => {
  //   document.body.classList.toggle("dark");
  // });
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar navbar-links">
      <div className="navbar-links_logo">
        <img src={Logo} alt="logo" className="navbar-links_logo-img" />
      </div>
      <div className="navbar-links_container">
        {" "}
        <p className="navbar-links_container-p">
          <a href="#personal">Personal</a>
          &nbsp; &nbsp;
          <img src={Vector} alt="vector" />
        </p>{" "}
        <p className="navbar-links_container-p2">
          <a href="#business">Business</a>
          &nbsp; &nbsp;
          <img src={Vector} alt="vector" />
        </p>
        <div className="searchbox">
          <img src={searchIcon} alt="searchIcon" className="searchbox__image" />
          <input
            type="text"
            className="input"
            placeholder="Find cards anywhere"
          />
        </div>
        {/* <Toggle /> */}
        <div className="navbar-links__sign">
          <p className="navbar-links__sign-p">
            <a href="#log">Login</a>
          </p>
          <button className="navbar-links__sign_button">
            <p>Get Started</p>
            <img
              src={sparkles}
              alt="sparkles"
              className="navbar-links__sign_button-img"
            />
          </button>
        </div>
        <div className="dropDownMenu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="dropDownMenu_container scale-up-center">
              <div className="dropDownMenu_container-links">
                <p>
                  <a href="#personal">Personal</a>
                  &nbsp; &nbsp;
                  <img src={Vector} alt="vector" />
                </p>
                <p>
                  <a href="#business">Business</a>
                  &nbsp; &nbsp;
                  <img src={Vector} alt="vector" />
                </p>
                <div className="dropDownMenu_searchbox">
                  <img
                    src={searchIcon}
                    alt="searchIcon"
                    className="dropDownMenu-searchbox__image"
                  />
                  <input
                    type="text"
                    className="dropDownMenu-input"
                    placeholder="Find cards anywhere"
                  />
                </div>
                <div className="dropDownMenu-theme-switch-wrapper">
                  <input
                    type="checkbox"
                    className="dropDownMenu-checkbox"
                    id="chk"
                  />
                  <label className="dropDownMenu-label" for="chk">
                    <img src={sunSolid} alt="sun-solid" className="leave" />
                    <img src={moonSolid} alt="moon-solid" className="leave" />
                    <div className="dropDownMenu-ball"></div>
                  </label>
                </div>
                <div className="dropDownMenu-navbar-links__sign">
                  <p className="dropDownMenu-navbar-links__sign-p">
                    <a href="#log">Login</a>
                  </p>
                  <button className="dropDownMenu-navbar-links__sign_button">
                    <p class="dropDownMenu-navbar-links__sign_button-p">Get Started</p>
                    &nbsp; &nbsp;
                    <img
                      src={sparkles}
                      alt="sparkles"
                      className="dropDownMenu-navbar-links__sign_button-img"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
