import React from "react";
import about_image from "../assets/images/png/about_bg.png";
import position_image from "../assets/images/svg/position_color.svg";

const About = () => {
  return (
    <>
      <section className=" min_vh_100 position-relative">
        <img
          className="position-absolute about_position_paint d-md-block d-none"
          src={position_image}
          alt="position_image"
        />
        <img className="w-100" src={about_image} alt="about_image" />
      </section>
    </>
  );
};

export default About;
