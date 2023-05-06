import React from "react";
import our_group from "../assets/images/png/our_group.png";
import text_image from "../assets/images/svg/text_image.svg";

const Mission = () => {
  return (
    <>
      <section className="custom_mission_topspace">
        <div className="container custom_container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={our_group} alt="our_group" />
            </div>
            <div className="col-md-6 custom_start_padding text-center text-md-start mt-4 mtmd-0">
              <h2 className="font_4xl fw-normal ff_Borsok text-black">
                our <span className="text_background_image">mission</span>
              </h2>

              <p className="ff_josefin font_sm mx-auto mx-md-0 fw-normal mission_custom_para_class text-black opacity_07">
                CheerFriends is created by Cover9 with the mission
                <br className="d-lg-block d-none"></br> to empower young
                athletes to achieve their goals without boundaries. We are
                providing sponsorships, useful tools to building a healthy
                mindset and<br className="d-lg-block d-none"></br> creating a
                safe space to share experiences and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
