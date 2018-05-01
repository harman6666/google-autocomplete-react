import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.keyAction = this.keyAction.bind(this);
	}
	keyAction(e) {
		if(e.keyCode === 13) {
			sessionStorage.setItem('name', e.target.value);
			this.props.history.push('/welcomePage');
		}
	}
	render() {
	    return ( 
		<div>
		   <div className="container">
		  </div>
		  <div className="form">
		        <span><label htmlFor="name">Hi, What is your Name?</label></span>
				<input className="active" id="name" name="name" onKeyUp={this.keyAction} type="text" placeholder="Enter your name" autoFocus/>
		         <div className="next__page--home" ref={button => {this.button = button}}>
					<NavLink to='/welcomePage' className="next round">&#8250;</NavLink>
				</div>
		    </div>
		</div>

		)
	}
}

