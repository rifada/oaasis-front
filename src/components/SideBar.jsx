import React from 'react';

import '../css/SideBar.css';

import {
  faHome,
  faBuilding,
  faCopy,
  faHeadset,
  faUserCog,
  faClipboardList,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

import SideBarItem from './SideBarItem';

const SideBar = ({ sidebar }) => {
  const menuList = [
    {
      link: '/dashboard',
      icon: faHome,
      title: 'Home',
    },
    {
      link: '/company',
      icon: faBuilding,
      title: 'Company',
    },
    {
      link: '/users',
      icon: faUserCog,
      title: 'Users',
    },
    {
      link: '/menu',
      icon: faClipboardList,
      title: 'Menu',
    },
    {
      link: '/prop',
      icon: faProjectDiagram,
      title: 'Prop',
    },
    {
      link: '/log',
      icon: faCopy,
      title: 'Log',
    },
    {
      link: '/crm',
      icon: faHeadset,
      title: 'CRM',
    },
  ];

  return (
    <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
      <ul className="sidebar-items">
        {menuList.map((menu, i) => {
          return <SideBarItem menu={menu} key={i} />;
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
