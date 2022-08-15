import React from "react";
import './footer.css';
import {Logo, Instagram, Facebook, Linkedin, arrowRight2, arrowUp} from "../index"

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div classNameName="footer clash">
          <div classNameName="footer-heading footer-1">
            <img src={Logo} alt="logo" classNameName="footer-1_img" />
            <p>Creating Happiness One Giftcard at a Time.</p>
            <div classNameName="social-icons">
              <a href="a">
                <img
                  src={Instagram}
                  alt="Instagram"
                  classNameName="footer_img-social__instagram"
                />
              </a>
              <a href="a">
                <img
                  src={Facebook}
                  alt="Facebook"
                  classNameName="footer_img-social__facebook"
                />
              </a>
              <a href="a">
                <img
                  src="images/Twitter.svg"
                  alt="Twitter"
                  classNameName="footer_img-social__twitter"
                />
              </a>
              <a href="a">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div classNameName="footer-heading footer-2">
            <div classNameName="footer-2_content-1">
              <h5>Contact Us</h5>
              <a href="a">hello&commat;digiftng.com</a>
            </div>
            <div classNameName="footer-2_content-2">
              <h5>Office</h5>
              <a href="a">
                226, Awolowo road, Ikoyi, <br />
                Lagos State, Nigeria
              </a>
            </div>
            <div classNameName="footer-2_content-3">
              <a href="a">
                Our privacy policy
                <img
                  src={arrowRight2}
                  alt="Arrow"
                  classNameName="arrow-right"
                />
              </a>
              <a href="a">
                Terms and Condition
                <img
                  src={arrowRight2}
                  alt="Arrow"
                  className="arrow-right"
                />
              </a>
            </div>
          </div>
          <div className="footer-heading footer-3">
            <h5 className="spec">Company</h5>
            <a href="a">Careers</a>
            <a href="a">FAQ</a>
          </div>
          <div className="footer-heading footer-4">
            <h5 className="spec">Products</h5>
            <a href="a">Personal</a>
            <a href="a">Business</a>
            <a href="a">Vendor</a>
          </div>
          <div className="footer-heading footer-5">
            <h5 className="spec">Contact</h5>
            <a href="a">Instagram</a>
            <a href="a">Twitter</a>
            <a href="a">LinkedIn</a>
            <a href="a">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="atop">
            <img src={arrowUp} alt="Arrow Up" />
          </a>
          <p>
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC <br />
            Number: 1656204. Trademark to all logos of Giftcards are owned by
            their respective brands and Blinksky Nigeria Limited doesn’t claim
            ownership of these trademarks. All <br />
            Giftcards dominated in USD are provided in conjunction with BlinkSky
            Inc. Users must have valid US account and in some cases a valid US
            address before purchasing.
          </p>
        </div>
        <a href="f" className="last">
          Copyright © 2022 Blinksky Nigeria Limited
        </a>
      </div>
    </div>
  );
}

export default Footer