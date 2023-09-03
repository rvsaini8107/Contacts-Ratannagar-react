import React from "react";
import { Link } from "react-router-dom";
import cam from "../images/camal.png";
import call from "../images/call.png";
import whatsapp from "../images/whatsapp.png";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import mail from "../images/mail.png";

const ContactUsPage = () => {
  return (
    <div className="contactUsPage" id="contact">
      <h2>Contact Us</h2>
      <div className="contect-div">
        <div className="contact-image">
          <img src={cam} alt={cam} className="contact_img" />
        </div>
        <div className="contact-link">
          <div className="right-div-contact">
            <Link className="contactLink contact-tel" to={"tel:+91 8107775019"}>
              {call && (
                <div className="icon icon-whatsapp">
                  <img
                    src={call}
                    alt="call"
                    className="icon-imgg icon-call"
                  />{" "}
                </div>
              )}
              <div className="icon-text">+918107775019</div>
            </Link>
            <Link
              className="contactLink contact-whatsapp"
              to={"tel:+91 8107775019"}
            >
              {whatsapp && (
                <div className="icon icon-whatsapp">
                  <img
                    src={whatsapp}
                    alt={whatsapp}
                    className="icon-imgg icon-whatsapp"
                  />{" "}
                </div>
              )}
              <div className="icon-text">WhatsApp</div>
            </Link>

            <Link
              className="contactLink contact-insta"
              to={
                "https://instagram.com/rv5550?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              }
            >
              {insta && (
                <div className="icon icon-whatsapp">
                  <img
                    src={insta}
                    alt="call"
                    className="icon-imgg icon-instagram"
                  />{" "}
                </div>
              )}
              <div className="icon-text">Instagram</div>
            </Link>
          </div>
          <div className="left-div-contact">
            <Link
              className="contactLink contact-fb"
              to={"https://www.facebook.com/ganesh.gour.7121"}
            >
              {facebook && (
                <div className="icon icon-whatsapp">
                  <img src={facebook} alt="" className="icon-imgg icon-fb" />{" "}
                </div>
              )}
              <div className="icon-text">Facebook</div>
            </Link>
            <Link
              className="contactLink contact-email"
              to={"mailto:rvsaini8107@gmail.com"}
            >
              {mail && (
                <div className="icon icon-mail">
                  <img src={mail} alt="" className="icon-imgg icon-fb" />{" "}
                </div>
              )}
              <div className="icon-text">Email</div>
            </Link>
            <Link
              className="contactLink contact-linkedin"
              to={"https://www.linkedin.com/in/shriganesh-saini-9a2927205"}
            >
              {linkedin && (
                <div className="icon icon-mail">
                  <img src={linkedin} alt="" className="icon-imgg icon-fb" />{" "}
                </div>
              )}
              <div className="icon-text">Linked In</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
