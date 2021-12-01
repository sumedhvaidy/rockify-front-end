import React from "react";
import { NavLink } from "react-router-dom"

function Navigation() {
	return(
		<div class = "menu">
      <li><NavLink to='/'><img src="rockifylogo.ico" width="50px" /></NavLink></li>
			<li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/recommend'>Recommend</NavLink></li>
      <li><NavLink to='/mylikes'>My Likes</NavLink></li>
    </div>
	)
}

export default Navigation;
