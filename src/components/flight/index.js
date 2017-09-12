import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Header from '../header';

export default class Flight extends Component {
	constructor() {
		super();
		this.state = {
		};
		
	}
	
	componentDidMount() {

	}

	render() {
		
		
		return (
				<div>
					<Header name={this.props.c.name} nextFlight={this.props.nextFlight} prevFlight={this.props.prevFlight} color={this.props.c.color} />
					{this.props.children}
				</div> 
		);
	}
}
