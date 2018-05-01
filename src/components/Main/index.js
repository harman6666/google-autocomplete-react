import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Map from '../GoogleMap';
import WelcomePage from '../WelcomePage';
import NoMatch from '../PageNotFound';


export default class Main extends React.Component {
	
	render() {
		return(
		  	<main>
		  		<Switch>
			      	<Route exact path='/' component={Home}/>
			    	<Route exact path='/welcomePage' component={WelcomePage}/>
			      	<Route exact path='/map' component={Map}/>
			      	<Route component={NoMatch} />
			    </Switch>
		  	</main>
		)
	}
}
