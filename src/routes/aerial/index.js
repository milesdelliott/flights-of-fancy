import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';


export default class Aerial extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	handleClick() {
		this.runAnim()
	}

	runAnim() {
		TweenLite.fromTo("#two", 2, {attr: {cx: 100}},{attr: {cx: 300}})
	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.aerial + ' flight'}>
			<svg class={style.aerial} xmlns="http://www.w3.org/2000/svg" version="1.1" onClick={this.handleClick.bind(this)}>
			<defs>
			  <filter id="goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
				<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
			<g filter="url(#goo)">
				<circle cx="200" cy="100" r="50"/>
				<circle cx="130" cy="130" r="60"/>
				<circle cx="200" cy="150" r="20"/>
				<circle cx="350" cy="100" r="30"/>
				<circle cx="250" cy="150" r="20"/>
				<circle id="two" cx="300" cy="120" r="50"/>
				<circle cx="270" cy="80" r="30"/>
			</g>
		  </svg>
			</section>
			<script src="assets/js/TweenLite.min.js"></script>
			<script src="assets/js/AttrPlugin.min.js"></script>
				<script onLoad={this.runAnim.bind(this)} src="assets/js/DrawSVGPlugin.min.js"></script>
			</Flight>
		);
	}
}

