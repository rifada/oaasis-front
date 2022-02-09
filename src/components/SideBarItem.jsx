import React from 'react';
import { Link } from 'react-router-dom';

import '../css/SideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBarItem = ({ menu }) => {
  return (
    <div>
      <li className="sidebar-item">
        <Link to={menu.link}>
          <div>
            <FontAwesomeIcon icon={menu.icon} />
          </div>
          <span>{menu.title}</span>
        </Link>
      </li>
    </div>
  );
};

export default SideBarItem;
