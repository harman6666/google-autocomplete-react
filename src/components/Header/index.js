import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return ( 
      <header className="header__container">
      	<nav>
      		<div className="header__logo">
      			<NavLink to='/'>
			        <img className="img__container" src={require('../../img/logo.png')} alt="logo"/>
			    </NavLink>
      		</div>
	      	<ul className="nav__links">
		        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
		      	<li><NavLink exact activeClassName="current" to='/welcomePage'>Welcome Page</NavLink></li>
		        <li><NavLink exact activeClassName="current" to='/map'>Map</NavLink></li>
	      	</ul>
	    </nav>
      </header>
    );
  }
};