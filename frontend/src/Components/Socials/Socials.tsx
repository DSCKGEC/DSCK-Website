import React from "react";
import "./Socials.scss";

type Props = {
  percent:number
}

const Socials: React.FC<Props> = (props) => {
  return (
    <div className="socials-container">
      <div className="scrollbar">
        <div className="scrolled"  style={{height:`${props.percent}%`}}></div>
      </div>
      <div className="socials">
        <a href="">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa fa-youtube"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="">
          <i className="fa fa-comments"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
