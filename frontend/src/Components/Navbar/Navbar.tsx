import React, { useEffect, useState } from "react";
import { NavLink, RouteComponentProps, useLocation, withRouter } from "react-router-dom";
import { RouteInfo } from "../../Interfaces";
import "./Navbar.scss";

export const routes: RouteInfo[] = [
  { path: "/home", title: "Home", icon: "fa-home" },
  { path: "/events", title: "Events", icon: "fa-calendar" },
  { path: "/projects", title: "Projects", icon: "fa-sticky-note" },
  { path: "/team", title: "Team", icon: "fa-users" },
  { path: "/contact", title: "Contact", icon: "fa-phone" },
];

const Navbar: React.FC<RouteComponentProps> = (props) => {
  const location = useLocation();

  const [menuClass, setMenuClass] = useState("");

  function navbarToggle() {
    if (menuClass === "open") {
      setMenuClass("close");
    } else {
      setMenuClass("open");
    }
  }

  return (
    <React.Fragment>
      <div className={`navbar-toggle ${menuClass}`} onClick={navbarToggle}>
        <i className="fa fa-angle-right"></i>
      </div>

      <div className="navbar-container">
        {routes.map((route) =>
          <NavLink to={route.path} activeClassName="active" className="menu-vert" key={route.title}>
              <div
                className="menu-item">
                <div className="menu-preview">
                  <svg
                    className="menu__stroke"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="21"
                      stroke="#557593"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                    ></circle>
                  </svg>
                  <i className={`fa ${route.icon}`}></i>
                </div>
                <div className="tooltip">{route.title}</div>
              </div>
            </NavLink>
          )}
      </div>

      <div className="overlay"></div>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
