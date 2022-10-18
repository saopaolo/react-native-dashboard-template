import React from "react";

import { Link } from "react-router-dom";

import "./_topnav.scss";

import Dropdown from "../dropdowns/Dropdown";

import IconBell from "../iconBellArea/IconBell";

import notifications from "../../assets/data/Notifications.json";

import userMenu from "../../assets/data/UserMenus.json";

import userImage from "../../assets/images/gokyuzu.png";

const currUser = {
  displayName: "John Doe",
  image: userImage
};

const renderUserToggle = (user) => (
  <div className="topnav__right__user">
    <div className="topnav__right__user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right__user__name">{user.displayName}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="topnav__right__user__item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const renderNotificationItem = (item, index) => (
  <div className="topnav__right__notification__item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__right">
        <div className="topnav__right__user">
          <Dropdown
            customToggle={() => renderUserToggle(currUser)}
            contentData={userMenu}
            renderItems={(item, index) => renderUserMenu(item, index)}
            renderHeader={() => <h5>View Profile</h5>}
            renderFooter={() => (
              <Link to="/">
                <span>Log Out</span>
              </Link>
            )}
          />
        </div>
        <div className="topnav__right__notifications">
          <Dropdown
            renderIcon={() => <IconBell />}
            badge="8"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => (
              <Link to="/">
                <span>View All</span>
              </Link>
            )}
            renderHeader={() => <h5>Notifications</h5>}
          />
        </div>
      </div>
      <div>
        {" "}
        <Dropdown />
      </div>
    </div>
  );
};

export default Topnav;
