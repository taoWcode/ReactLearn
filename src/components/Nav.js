import React from 'react';
import './nav.css';
import {
  NavLink
} from 'react-router-dom';

const NavBar = () => {
  return ( <div>
  				< NavLink to = "/" className="blue" > 首页 < /NavLink> |&nbsp;
  				<NavLink to = "/Page02" activeClassName = "active">JSX语法部分</NavLink> |&nbsp;
  				<NavLink to = "/Page03/ILoveWeb/张三" activeClassName = "active">组件1</NavLink> |&nbsp;
  				<NavLink to = "/redirect" activeClassName = "active">Redirect</NavLink> |&nbsp;
  				<NavLink to = "/react" activeClassName = "active">404</NavLink>
			</div>
  			)
}

export default NavBar;