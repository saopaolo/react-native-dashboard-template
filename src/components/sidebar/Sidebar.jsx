import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import sidebarNav from "../../configs/sidebarNav";

import logoText from "../../assets/logo/logo-text.png";

import logoIcon from "../../assets/logo/logo-icon.png";

//import "./sidebar-3.css";

import "./_sidebar.scss";

import "./_sidebarinactive.scss";

//import "./responsiveSidebar.css";

const Sidebar = (props) => {
  const [inactive, setInactive] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="sidebar__top__area">
        <div className="sidebar__top__area__logo">
          <img src={logoIcon} alt="logo icon" />
          <img src={logoText} alt="logo text" />
        </div>

        <div className="sidebar__top__area__toggle__menu__btn">
          <div onClick={() => setInactive(!inactive)}>
            {inactive ? (
              <i className="bx bxs-right-arrow-square"></i>
            ) : (
              <i className="bx bxs-left-arrow-square"></i>
            )}
          </div>
        </div>
      </div>{" "}
      {/*topArea */}
      <div className="sidebar__menu">
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
          >
            {" "}
            <div className="sidebar__menu__item__area">
              <div className="sidebar__menu__item__area__list">
                <div className="sidebar__menu__item__area__list__icon">
                  {nav.icon}
                </div>
                <div className="sidebar__menu__item__area__list__text">
                  {nav.text}
                </div>{" "}
              </div>
            </div>
          </Link>
        ))}
      </div>{" "}
      {/*main-menu*/}
    </div>
  );
};

export default Sidebar;

/* 

            data-tip={nav.text}
            data-for="registerTip"
              <ReactTooltip id="registerTip" place="right" effect="solid">
                {nav.text}
              </ReactTooltip>
              */
