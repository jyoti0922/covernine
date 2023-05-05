import React from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="my-5">
        <div className="container custom_container">
          <div className="d-flex align-items-center justify-content-between">
            <img className="w_259 w-100 cursor_pointer" src={logo} alt="logo" />
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
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#track"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Tracking
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#suport"
                  className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                >
                  Support
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center gap-2 gap-lg-4 gap-xl-5 gap_xxl_70 ps-0 mb-0 d-none d-lg-flex">
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
          <article className="w-100 d-flex justify-content-between ">
            {" "}
            <span> </span>
          </article>{" "}
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
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_red_text fw_regular fs_3 color_1 nav_hover"
                  >
                    Locations
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
              </ul>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
