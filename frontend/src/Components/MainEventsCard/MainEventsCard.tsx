import React from "react";
import "./MainEventsCard.scss";

const MainEventsCard: React.FC = () => {
  return (
    <div className="main-events-card">
      <div className="card">
        <input checked={true} id="rad1" name="rad" type="radio" />
        <div>
          <h1>1</h1>
          <div className="btn"></div>
        </div>
        <input id="rad2" name="rad" type="radio" />
        <div>
          <h1>2</h1>
          <div className="btn"></div>
        </div>
        <input id="rad3" name="rad" type="radio" />
        <div>
          <h1>3</h1>
          <div className="btn"></div>
        </div>
        <input type="checkbox" />
        <a>Read More</a>
        <p>
          Phasellus nec sem in justo pellentesque facilisis. In hac habitasse
          platea dictumst. Praesent metus tellus, elementum eu, semper a,
          adipiscing nec, purus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
          ipsum. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu.
        </p>
        <div className="shapes"></div>
        <div className="photo">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="blob">
          <div className="glob"></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <svg className="svg" viewBox="0 0 400 400">
        <defs>
          <filter id="duotone-filter-post-one">
            <feColorMatrix
              type="matrix"
              values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
      </div>
  );
};

export default MainEventsCard;