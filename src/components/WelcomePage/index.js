import React from 'react';
import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

export default class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: (sessionStorage.getItem('name')) ? sessionStorage.getItem('name') : 'Champian'
		}
	}
	render() {
	    return ( 
			<div className="welcome__page">
			  	<div className="box">
				  <div className="inner">
				    <span>Hello {this.state.name}</span>
				  </div>
				  <div className="inner"> 
				    <span>Hello {this.state.name}</span>
				  </div>
				</div>
				<div className="ref__text">Please proceed for the assignment evalution by clicking on the next button or map link.</div>
				<div className="next__page">
					<NavLink to='/map' className="next round">&#8250;</NavLink>
				</div>
			</div>
		)
	}
}
