import { h, Component } from 'preact';
import { getCurrentUrl, route, Router } from 'preact-router';


import Header from './header';
import Home from '../routes/home';
import Typewriter from '../routes/typewriter';
import Destination from '../routes/destination';
import Shine from '../routes/shine';
import Glide from '../routes/glide';
import Link from '../routes/link';
import Factory from '../routes/factory';
import Wave from '../routes/wave';
// import Home from 'async!./home';
// import Profile from 'async!./profile';



function RandomRoute(props) {

	return props.children[Math.floor(Math.random() * props.children.length)]
}

function Featured(props) {
	let FeaturedComponent = props.flights[props.index].component
	return (
		<FeaturedComponent prevFlight={props.prevFlight} nextFlight={props.nextFlight} c={props.flights[props.index]} i={props.index} />
	)
}

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			flights: [
				{name: 'typewriter', component: Typewriter, color: '#FFFFFF'},
				{name: 'destination', component: Destination, color: "#8dc6ff"},
				{name: 'shine', component: Shine, color: "#FBB03B"},
				{name: 'glide', component: Glide, color: "#8dc6ff"},
				{name: 'link', component: Link, color: '#06FFF8'},
				{name: 'factory', component: Factory, color: '#06FFF8'},
				{name: 'wave', component: Wave, color: '#06FFF8'}
			]
		}
		
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		
	};

	getSequentialFlight (currentFlight, direction) {
		let currentIndex = this.getFlightPosition(currentFlight)
		let newIndex
		if ((currentIndex + direction) < 0) {
			newIndex = this.state.flights.length - 1

		} else if ((currentIndex + direction) >= this.state.flights.length ) {
			newIndex = 0 
		} else {
			newIndex = currentIndex + direction
		}
		return this.getFlightNameByIndex(newIndex)
	}

	getFlightNameByIndex (index) {
		return this.state.flights[index].name
	}

	nextFlight(currentFlight) {
		return this.getSequentialFlight (currentFlight, 1)
	}

	prevFlight(currentFlight) {
		return this.getSequentialFlight (currentFlight, -1)
	}

	goToNextFlight(currentFlight) {
		this.goToFlight(this.nextFlight(currentFlight))
	}

	goToPrevFlight(currentFlight) {
		this.goToFlight(this.prevFlight(currentFlight))
	}

	getFlightPosition (name) {
		return this.state.flights.reduce((accumulator, flight, index, a) => {
			if (flight.name == name) return index
			return accumulator == -1 ? -1 : accumulator
		}, -1)
	}

	goToFlight (flightName) {
		route('/'+flightName+'/')
	}

	render() {
		return (
			<div id="app" >
				<Router onChange={this.handleRoute}>
				<Featured prevFlight={this.prevFlight.bind(this)} nextFlight={this.nextFlight.bind(this)} index={4} flights={this.state.flights} path="/" />
					<RandomRoute path="/random/">
						{this.state.flights.map((F, i) => {
							return <F.component prevFlight={this.prevFlight.bind(this)} nextFlight={this.nextFlight.bind(this)} c={F} key={i} i={i} />
						})}
					</RandomRoute>
					{this.state.flights.map((F, i) => {
							return <F.component prevFlight={this.prevFlight.bind(this)} nextFlight={this.nextFlight.bind(this)} c={F} key={i} i={i} path={ '/'+F.name+'/'} />
						})}
				</Router>
			</div>
		);
	}
}
