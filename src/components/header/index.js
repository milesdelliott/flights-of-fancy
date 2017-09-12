import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
		
	}

	getFlightPath(name) {
		return '/' + name
	}

	getNextFlightPath() {
		return this.getFlightPath(this.props.nextFlight(this.props.name))
	}

	getPrevFlightPath() {
		return this.getFlightPath(this.props.prevFlight(this.props.name))
	}

	render() {
		return (
				<header class={style.header} style={'background-color: '+(this.props.color ? this.props.color : '#fff')}>
					<h1 class={style.name} >
						<a href="https://mileselliott.me"><span>miles</span><span>.flights/of/fancy.</span><span>{this.props.name}</span></a>
					</h1>
					<nav class={style.nav}>
						<Link href={this.getPrevFlightPath()}>{'<'}</Link>
						<Link href={this.getNextFlightPath()}>{'>'}</Link>
					</nav>
				</header>
		);
	}
}
