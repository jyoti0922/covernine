import React, { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="min-vh-100 bg_hero">
        <div className="container custom_container">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="ff_Borsok font-normal font_lg text_orange">
              cheer friends
            </h1>
            <div
              onClick={() => setNavShow(!navShow)}
              className=" btnss text-danger px-2 py-1 d-lg-none rounded-3"
            >
              <div className="line_black"></div>
              <div className="line_black"></div>
              <div className="line_black"></div>
            </div>
            <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 gap-2 gap-lg-4 gap-xl-5 gap_xxl_70">
              <li>
                <a
                  href="#home"
                  className="ff_Borsok  nav_hover"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#track"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  roadmap
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  rarity
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  team
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  faq’s
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  whitepaper
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center gap-2 gap-lg-4 gap-xl-5 gap_xxl_70 ps-0 mb-0 d-none d-lg-flex">
              <li>
                <a
                  href="#"
                  className="ff_red_text fw_regular fs_3 text-white bg_1 br_green button_styling"
                >
                  Connect wallet
                </a>
              </li>
            </ul>
          </div>
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-4">
                <button
                  onClick={() => setNavShow(false)}
                  className=" btn btn-close  d-lg-none color_lwhite position-absolute top_20 w_50"
                ></button>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    rarity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    Signin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 text-white bg_1 br_green button_styling"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
