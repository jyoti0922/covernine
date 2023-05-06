import React from "react";
import Header from "./Header";
import discordicon from "../assets/images/svg/discord-icon.svg";
import twittericon from "../assets/images/svg/twitter-icon.svg";
import instaicon from "../assets/images/svg/insta-icon.svg";
import heroicon from "../assets/images/svg/hero-icon.svg";
import orangeellipse from "../assets/images/svg/hero-orange-bg.svg";
import girlleft from "../assets/images/svg/hero-girl1-img.svg";
import blueellipse from "../assets/images/svg/heropurple-bg.svg";
import girlright from "../assets/images/svg/hero-girl2-img.svg";

const Hero = () => {
  return (
    <section className="min-vh-100 bg_hero d-flex flex-column">
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-grow-1 position-relative">
        <img
          className="position-absolute orangeellipseset d-none d-xl-block"
          src={orangeellipse}
          alt="orangeellipse"
        />
        <img
          className="position-absolute girl1_set d-none d-xl-block "
          src={girlleft}
          alt="girlleft"
        />
        <img
          className="position-absolute buleellipse_set d-none d-xl-block "
          src={blueellipse}
          alt="blueellipse"
        />
        <img
          className="position-absolute girlright_set d-none d-xl-block "
          src={girlright}
          alt="girlright"
        />
        <div className="container custom_container">
          <div className="d-flex flex-column align-items-center">
            <p className="ff_josefin font-semibold font_xl text-black welcome_textbg d-flex align-items-center justify-content-end pe-3 text-center mb-0">
              WELCOME TO
            </p>
            <h1 className="ff_Borsok font-normal font_6xl text_orange mb-0 text-center text_border">
              cheer <span className="text_blue d-xl-block">friends</span>
            </h1>
            <p className="ff_josefin font-semibold text-black font_md mb-2">
              The first cheerleading NFT Collection on the blockchain!
            </p>
            <div className="d-flex align-items-center gap-4 mt-4">
              <img src={discordicon} alt="discordicon" />
              <img src={twittericon} alt="twittericon" />
              <img src={instaicon} alt="instaicon" />
              <img src={heroicon} alt="heroicon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
