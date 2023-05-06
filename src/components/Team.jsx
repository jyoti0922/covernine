import React from "react";
import xrisy_img from "../assets/images/png/xrisy_img.png";
import josh_img from "../assets/images/png/josh_img.png";
import lawless_img from "../assets/images/png/lawless_img.png";
import skip_img from "../assets/images/png/skip_img.png";
import Member from "../assets/images/png/Member Card_Skip.png";
import Card_lawless from "../assets/images/png/Member Card_lawless.png";

const Team = () => {
  return (
    <>
      <section className="team_background_image min-vh-100 team_custom_paddingY">
        <div className="container custom_container">
          <h2 className="text-center font_3xl fw-normal ff_Borsok faq_text_bottom_padding pt-2 faq_textbg mx-auto">
            Team
          </h2>
          <div className="row">
            <div className="col-2 px-0 transform_rotate_team_image1  position-relative z_index1">
              <img className="w-100" src={xrisy_img} alt="xrisy_img" />
            </div>
            <div className="col-2 px-0 transform_rotate_team_image2 mt-4">
              <img className="w-100" src={josh_img} alt="xrisy_img" />
            </div>
            <div className="col-2 px-0 transform_rotate_team_image3  position-relative z_index_-1">
              <img className="w-100" src={lawless_img} alt="lawless_img" />
            </div>
            <div className="col-2 px-0 transform_rotate_team_image4 mt-4">
              <img className="w-100" src={skip_img} alt="skip_img" />
            </div>
            <div className="col-2 px-0 transform_rotate_team_image5 position-relative z_index2">
              <img className="w-100" src={Card_lawless} alt="Card_lawless" />
            </div>
            <div className="col-2 px-0 transform_rotate_team_image6 mt-4 position-relative z_index_-1">
              <img className="w-100" src={Member} alt="Member" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
