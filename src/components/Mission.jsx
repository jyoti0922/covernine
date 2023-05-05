import React from "react";
import our_group from "../assets/images/png/our_group.png";

const Mission = () => {
  return (
    <>
      <section className="custom_mission_topspace">
        <div className="container custom_container">
          <div className="row align-items-center">
            <div className="col-6">
              <img className="w-100" src={our_group} alt="our_group" />
            </div>
            <div className="col-6 custom_start_padding">
              <h2 className="font_4xl fw-normal ff_Borsok text-black">
                our mission
              </h2>
              <p className="ff_josefin font_sm fw-normal mission_custom_para_class text-black opacity_07">
                CheerFriends is created by Cover9 with the mission to empower
                young athletes to achieve their goals without boundaries. We are
                providing sponsorships, useful tools to building a healthy
                mindset and creating a safe space to share experiences and
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
