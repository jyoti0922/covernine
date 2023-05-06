import React from "react";
import footer_logo from "../assets/images/svg/footer_logo.svg";
import discordicon from "../assets/images/svg/footer_discord_icon.svg";
import twittericon from "../assets/images/svg/footer_twitter-icon.svg";
import instaicon from "../assets/images/svg/footer_insta-icon.svg";
import heroicon from "../assets/images/svg/footer_icon.svg";

const Footer = () => {
  return (
    <>
      <section className="footer_background_image footer_custom_padding position-relative">
        <div className="container custom_footer_container">
          <div className="row justify-content-between">
            <div className="col-md-4 text-center text-md-start">
              <a href="#">
                <img src={footer_logo} alt="footer_logo" />
              </a>
              <p className=" font_xs fw-normal text-white opacity_08 pt-md-3 pt-1">
                Imperdiet ipsum purus tortor quisque adipiscing
                <br className="d-lg-blok d-none"></br> id aliquet. Nam turpis
                turpis sit nullam facilisi scelerisque sit a lorem.
              </p>
              <div className="d-flex gap-4 footer_icon_top_spacing justify-content-center justify-content-md-start">
                <a href="#">
                  <img src={discordicon} alt="discordicon" />
                </a>
                <a href="#">
                  <img src={twittericon} alt="twittericon" />
                </a>
                <a href="#">
                  <img src={instaicon} alt="instaicon" />
                </a>
                <a href="#">
                  <img src={heroicon} alt="heroicon" />
                </a>
              </div>
            </div>
            <div className="col-md-4 mt-md-4 mt-5">
              <div className="row">
                <div className="col-6 text-center text-md-start">
                  <h4 className=" font_xs fw-normal text-white ff_Borsok">
                    community
                  </h4>
                  <ul className="ps-0 mt-1">
                    <li className="">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        Discord{" "}
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        Medium
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-center text-md-start">
                  <h4 className=" font_xs fw-normal text-white ff_Borsok">
                    Documents
                  </h4>
                  <ul className="ps-0 mt-1">
                    <li className="">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        className="font_xs fw-normal text-white ff_josefin text-white opacity_09"
                        href="#"
                      >
                        Documents
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_border"></div>
        <p className=" text-center font_xs fw-normal ff_josefin text-white opacity_08 py-4 mb-0">
          © Copyright Cover9 | All Rights Reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
