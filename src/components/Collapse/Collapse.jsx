import React, { useState } from "react";
import arrow from "../../assets/collapse-arrow.svg";

export default function Collapse({ title, children, classDetail }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={classDetail}>
      <div className="collapse-header" onClick={toggleCollapse} key="title">
        <h3>{title}</h3>
        <img
          className={`arrow ${isCollapsed ? "collapsed" : ""}`}
          src={arrow}
          alt={isCollapsed ? "Expand" : "Collapse"}
        />
      </div>
      {!isCollapsed && (
        <div className="collapse-content">
          {Array.isArray(children)
            ? children.map((child, index) => (
                <div className="collapse-content_element" key={index}>
                  {child}
                </div>
              ))
            : children}
        </div>
      )}
    </div>
  );
}
