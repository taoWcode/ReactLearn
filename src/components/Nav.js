import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const NavBar = () => {
  return ( <div>
  				< NavLink to = "/" > 首页 < /NavLink> |&nbsp;
  				<NavLink to = "/Page02">JSX语法部分</NavLink> |&nbsp;
			</div>
  			)
}

export default NavBar;