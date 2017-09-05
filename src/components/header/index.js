import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
				<h1 class={style.name}>
					<a href="https://mileselliott.me">Miles.</a>
				</h1>
		);
	}
}
