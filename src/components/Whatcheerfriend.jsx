import React from "react";
import Slider from "react-slick";
import layerimg from "../assets/images/svg/whatcheerfriend-bg.svg";

const Whatcheerfriend = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayspped: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg_hero position-relative">
      <img
        className="position-absolute w-100 cheerfriend_position"
        src={layerimg}
        alt="layerimg"
      />
      <article>
        <div className="transform_rotate pt-md-5">
          <Slider {...settings}>
            <div className="w-20">
              <div className="p-2">
                <p>cheer friends</p>
              </div>
            </div>
            <div className="w-20">
              <div className="p-2">
                <p>cheer friends</p>
              </div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
            <div className="w-20">
              <div className="p-2"></div>
            </div>
          </Slider>
        </div>
      </article>
      <div className="container custom_container mt-5 pt-5">
        <div className="row justify-content-center align-items-center position-relative z_index_3 mt-5 pt-5">
          <div className="col-12 col-lg-10 mt-5 pt-5">
            <div className="bg_white">
              <h2 className="text-center ff_Borsok font-normal font_4xl text-black mb-2">
                what are
                <span className="cheerfriengd_bg white_space">
                  cheerfriends ?
                </span>
              </h2>
              <p className="ff_josefin font-normal font_2sm text-black opacity_07 text-center pt-4">
                CheerFriends is a collection of 9,000 unique digitally mastered
                NFT's stunting and tumbling on the Ethereum Blockchain as
                ERC-721.
              </p>
              <p className="ff_josefin font-normal font_2sm text-black opacity_07 text-center mb-0">
                Each CheerFriend is generated from an array of traits. AlI
                CheerFriends are rare but some are rarer than others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatcheerfriend;
