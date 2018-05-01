import React from 'react';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <div className="page__not--found">
    	<div className="not__found--info">
		<h2>404</h2>
		<h3>SORRY</h3>
		<p>The Page You're Looking for Was Not Found.</p>
		<button><NavLink exact activeClassName="current" to='/'>Go back to homepage</NavLink></button>
	</div>
    </div>
  </div>
)

export default PageNotFound;	
