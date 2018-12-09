import React from "react";

const Link = ({ active, children, onClick, cssClass }) => (
  <button onClick={onClick} disabled={active} className={cssClass}>
    {children}
  </button>
);

export default Link;
