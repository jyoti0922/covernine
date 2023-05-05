import React from "react";
import about_image from "../assets/images/png/about_bg.png";

const About = () => {
  return (
    <>
      <section className=" min-vh-100 ">
        <img className="w-100" src={about_image} alt="about_image" />
      </section>
    </>
  );
};

export default About;
