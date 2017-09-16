import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';


export default class Factory extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	repeatRender(number) {
		let out = []
		for (let i=0; i++; i < number) {
			out.push(
				(function(e) {
					console.log(e)
					return e
				})(<g filter="url(#f1)" height="100%" width="100%">
					<text  text-anchor="middle" class={style.text + ' ' + style.textOf}  y="30" x={'"' + (40 - i) + "'"}>of</text>
				</g>)
			)
		}
		console.log(out)
		return out
	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.factory + ' flight'}>
				<svg class={style.svg} viewBox="0 0 80 60" version="1.1" id="Layer_4_copy" xmlns="http://www.w3.org/2000/svg">
				<filter id="f1" x="-10%" y="-10%" width="130%" height="130%">
					<feGaussianBlur result="blur" stdDeviation="1" />
				</filter>
				<filter id="f2" x="-10%" y="-10%" width="130%" height="130%">
					<feGaussianBlur result="blur" stdDeviation="1" />
				</filter>
					<text text-anchor="middle" class={style.text} y="20" x="40">Flights</text>
					
					<text text-anchor="middle" class={style.text}  y="40" x="40">Fancy</text>
					{[34,36,38,40,42,44,46].map((e,i)=>{
						return <g filter="url(#f1)" height="100%" width="100%">
					<text  text-anchor="middle" class={style.text + ' ' + style.textOf}  y="30" x={e}>of</text>
				</g>
					})}
					</svg>
			</section>
			</Flight>
		);
	}
}

