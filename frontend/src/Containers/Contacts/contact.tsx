import React from "react";
import "./contact.scss";
import DSCBackground from "../../static/dark-header-background-upper.png";
import Form from "../../Components/Form/form";
import Handanimation from "../../Components/HandAnimation/handanimation";
import facebook from "../../static/facebook.png";
import twitter from "../../static/twitter.png";
import youtube from "../../static/youtube.png";
import discord from "../../static/discord.png";
import instagram from "../../static/instagram.png";
import linkedin from "../../static/linkedin.png";

const Contact: React.FC = () => {
  // -----------------Submit Function----------------------  //
  const handleSubmit = (data: object) => {
    console.log(data);
  };
  // --------------------------------------------------------  //
  return (
    <div className="contact">
      {/* -----------------Heading----------------- */}
      <div className="heading">
        <div className="dsc-background">
          <img src={DSCBackground} alt="Background" />
          <div className="header-title">
            <h1>Contact Us</h1>
            <h3>Thank You for Taking an Interest</h3>
          </div>
        </div>
      </div>

      {/* -----------------*********----------------- */}
      {/* -----------------Form And hand Animation----------------- */}
      <div className="middle">
        <Handanimation />
        <Form Submit={handleSubmit} />
      </div>
      {/* -----------------------***********----------------------- */}
      <div className="socialmedia-banner">
        <h1>You Can Also Connect to Us Via:</h1>
        <p>
          <a
            href={"https://www.facebook.com/dsckgec/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="" srcSet="" />
          </a>
          <a
            href={"https://www.twitter.com/dsckgec/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" srcSet="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UChIuhjS8Kny2wc7mZrVjSuQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="" srcSet="" />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/company/dsckgec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" srcSet="" />
          </a>
          <a
            href="https://www.instagram.com/dsckgec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" srcSet="" />
          </a>
          <a
            href="https://dsck.ml/discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="" srcSet="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
