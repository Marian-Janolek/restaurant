import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app-menuItem">
    <div className="app-menuItem-head">
      <div className="app-menuItem-name">
        <p className="p-cormorant" style={{ color: '#dcca87' }}>
          {title}
        </p>
      </div>
      <div className="app-menuItem-dash" />
      <div className="app-menuItem-price">
        <p className="p-cormorant">{price}</p>
      </div>
    </div>
    <div className="app-menuItem-sub">
      <p className="opensans" style={{ color: '#aaa' }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
