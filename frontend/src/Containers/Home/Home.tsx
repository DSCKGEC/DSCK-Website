import React from "react";
import "./Home.scss";
import DSCLogo from '../../static/dsc-logo-square.svg';
import MainSvg from "../../Components/MainSvg/MainSvg";
import MainEventsCard from "../../Components/MainEventsCard/MainEventsCard";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <div className="text-content">
          <span>
            <img
              src={DSCLogo}
              className="dsc-logo"
              alt=""
            />
            <h1 className="heading">DSC KGEC</h1>
          </span>

          <h2>Powered by Google Developers</h2>
          <p>
            Our primary focus is to build up a community of developers not
            limited by the bounds of any college.Inspire, Aspire, Build.
            <br /> <span>Join Us.</span>
          </p>
        </div>
        <div className="svg-content">
            <MainSvg></MainSvg>
        </div>
        <div className="main-down-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(-966 -967.48)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M982,967.98V1011.1"
                transform="translate(-1.5)"
                fill="none"
                stroke="#141414"
                strokeLinecap="round"
                strokeWidth="1"
              ></path>
              <path
                id="Path_2"
                data-name="Path 2"
                d="M966.813,997.8l13.973,13.577L994.363,997.8"
                transform="translate(-0.313)"
                fill="none"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {/* <MainEventsCard/> */}
    </div>
  );
};

export default Home;
