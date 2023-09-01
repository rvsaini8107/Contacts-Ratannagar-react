import React from "react";
import { Link } from "react-router-dom";
import cam from "../images/camal.png";

const ContactUsPage = () => {
  return (
    <div className="contactUsPage" id="contact">
      <h2>Contact Us</h2>
      <div className="contect-div">
       <div className="contact-image">
          <img src={cam} alt={cam} className="contact_img"/>
        </div>
        <div className="contact-link">
          <Link
            className="contactLink contact-whatsapp"
            to={"tel:+91 8107775019"}
          >
           WhatsApp
          </Link>
          <Link className="contactLink contact-tel" to={"tel:+91 8107775019"}>
            Call Us
          </Link>
          <Link
            className="contactLink contact-insta"
            to={
              "https://instagram.com/rv5550?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
            }
          >
            Instagram
          </Link>
          <Link
            className="contactLink contact-fb"
            to={"https://www.facebook.com/ganesh.gour.7121"}
          >
            Facebook
          </Link>
          <Link
            className="contactLink contact-email"
            to={"mailto:rvsaini8107@gmail.com"}
          >
            Email
          </Link>
          <Link
            className="contactLink contact-linkedin"
            to={"https://www.linkedin.com/in/shriganesh-saini-9a2927205"}
          >
            Linked In
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUsPage;
