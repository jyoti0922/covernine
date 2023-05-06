import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slider1() {
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
    <>
      <section className="pb-5 bg_them overflow-hidden position-relative">
        {/* <img
          className=" position-abs image2 d-md-block d-none"
          src={Krst_img}
          alt="Krst_img"
        /> */}
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
              <div className="p-2">
                <p>cheer friends</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Slider1;
