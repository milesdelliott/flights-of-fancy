import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Typewriter from '../routes/typewriter';
import Destination from '../routes/destination';
import Shine from '../routes/shine';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Shine path="/" />
					<Typewriter path="/typewriter/" />
					<Destination path="/destination/" />
					<Shine path="/shine/" />
				</Router>
			</div>
		);
	}
}
