import React, { useRef } from "react";

//import "./Dropdown.css";

import IconBell from "../iconBellArea/IconBell";

import "./_dropdown.scss";

const clickOutsideRef = (contentRef, toggleRef) => {
  document.addEventListener("mousedown", (e) => {
    //when it is click toggle by user
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("active");
    } else {
      //click outside toggle and content
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdownToggleEl = useRef(null);
  const dropdownContentEl = useRef(null);

  clickOutsideRef(dropdownContentEl, dropdownToggleEl);
  return (
    <div className="dropdown">
      <button ref={dropdownToggleEl} className="dropdown__toggle">
        {props.renderIcon ? <IconBell /> : ""}
        {props.badge ? (
          <span className="dropdown__toggle__badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>

      <div ref={dropdownContentEl} className="dropdown__content">
        <div className="dropdown__content__list">
          {props.renderHeader ? (
            <div className="dropdown__content__list__header">
              {props.renderHeader()}
            </div>
          ) : (
            ""
          )}
          {props.contentData && props.renderItems
            ? props.contentData.map((item, index) =>
                props.renderItems(item, index)
              )
            : ""}
        </div>
        <div>
          {props.renderFooter ? (
            <div className="dropdown__content__footer">
              {props.renderFooter()}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
