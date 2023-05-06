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
      <nav>
        <div className="container custom_container pt-1">
          <div className="d-flex align-items-center justify-content-between py-3 nav_border_bottom">
            <a
              href="#"
              className="ff_Borsok font-normal font_lg text_orange mb-0 white_space"
            >
              cheer <span className="text_blue">friends</span>
            </a>
            <div
              onClick={() => setNavShow(!navShow)}
              className=" menubtn text-danger px-2 py-1 d-lg-none rounded-3"
            >
              <div className="line_orange"></div>
              <div className="line_orange"></div>
              <div className="line_orange"></div>
            </div>
            <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0">
              <li>
                <a
                  href="#home"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#track"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  roadmap
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  rarity
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  team
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  faq’s
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_Borsok font-normal font_sm text-black nav_hover px-1 px-xl-2"
                >
                  whitepaper
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center gap-2 gap-lg-4 gap-xl-5 gap_xxl_70 ps-0 mb-0 d-none d-lg-flex">
              <li>
                <a
                  href="#"
                  className="ff_Borsok font-normal font_sm text-white nav_btn_styling"
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
                    href="#home"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#track"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#shipping"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    rarity
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    team
                  </a>
                </li>
                <li>
                  <a
                    href="#suport"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    faq’s
                  </a>
                </li>
                <li>
                  <a
                    href="#suport"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#suport"
                    className="ff_Borsok font-normal font_sm text-black nav_hover px-2"
                  >
                    whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_Borsok font-normal font_sm text-white nav_btn_styling"
                  >
                    Connect wallet
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
