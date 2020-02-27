import React, { Component } from 'react';


/* */
const Menu = ({alignment, children}) => (
    <div className="menu">
        <div className={alignment}>{children}</div>
    </div>
  );

export default Menu;