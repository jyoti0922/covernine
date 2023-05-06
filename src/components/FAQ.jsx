import React from "react";
import Accordion from "react-bootstrap/Accordion";
import faq_bg_img from "../assets/images/svg/faq_bg_img.svg";

const FAQ = () => {
  return (
    <>
      <section className=" faq_paddint_top position-relative">
        <img
          className=" position-absolute end-0 bottom-0 z_index_-1"
          src={faq_bg_img}
          alt="faq_bg_img"
        />
        <div className="container">
          <h2 className="text-center font_3xl fw-normal ff_Borsok faq_text_bottom_padding faq_text_background_image">
            FAQ’s
          </h2>
          <Accordion className="faq_custom_width mx-auto" defaultActiveKey="0">
            <Accordion.Item eventKey="0" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Enim felis diam rhoncus elementum sapien?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  A cursus in at sed amet risus?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Tellus in tincidunt id odio?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Felis integer quis rhoncus purus?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Enim felis diam rhoncus elementum sapien?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Pellentesque massa justo sit aenean ornare turpis scelerisque
                  vivamus tortor?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className=" bg-white faq_spacing">
              <Accordion.Header className="">
                <h2 className="font_xs ff_josefin fw-bold text-black mb-0 ">
                  Blandit enim scelerisque eu egestas non egestas porttitor
                  sodales fermentum?
                </h2>
              </Accordion.Header>
              <Accordion.Body className="text-black acc_body ">
                <p className="mb-0 text-black opacity_07 pt-3">
                  Viverra commodo fusce rhoncus enim amet tellus. Odio semper eu
                  ridiculus pellentesque vel ipsum pellentesque. Tempor eu sit
                  eget semper mauris. Imperdiet curabitur enim eleifend eros
                  eget quam. Facilisi lectus posuere mauris enim consequat non
                  nibh. Massa venenatis suspendisse id feugiat urna elementum
                  ornare nascetur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
