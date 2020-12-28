import React from 'react';
import "./Navbar.scss";

const Navbar:React.FC = () => {
    function toggleStyle(){

    }

  return (
    <nav>
    <div className="side-nav">
        <div className="wrapper logo">
            <div className="logo-img"></div>
            <div className="nav-text">DSC KGEC</div>
        </div>
        <a className="btn-atr" href="./index.html">
            <div className="wrapper nav-start">
                <button type="button">
            <div className="active btn">
            </div>
        </button>
                <div className="nav-text">Home</div>
            </div>
        </a>
        <a className="btn-atr" href="./events.html">
            <div className="wrapper">
                <button type="button">
            <div className="btn">
            </div>
        </button>
                <div className="nav-text">Events</div>
            </div>
        </a>
        <a className="btn-atr" href="./projects.html">
            <div className="wrapper">
                <button type="button">
            <div className="btn">
            </div>
        </button>
                <div className="nav-text">Projects</div>
            </div>
        </a>
        <a className="btn-atr" href="./joinus.html">
            <div className="wrapper">
                <button type="button">
            <div className="btn">
            </div>
        </button>
                <div className="nav-text">Join us</div>
            </div>
        </a>
        <div className="buttons">
            <div className="wrapper">
                <button type="button" onClick={toggleStyle} name="Theme" value="Theme">
                <div className="btn" id="theme-btn">
                </div>
            </button>
                <div className="nav-text">Toggle Theme</div>
            </div>
        </div>
    </div>
</nav>
  );
}

export default Navbar;
