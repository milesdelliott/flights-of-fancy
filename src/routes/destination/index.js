import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';


export default class Destination extends Component {
	constructor() {
		super();
		this.state = {
			phrase: 'flights of fancy',
			current: [0, 0],
			splitWord: 1
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.destination + ' flight'}>
				<h1 class={style.phrase}>
				</h1>
			</section>
			</Flight>
		);
	}
}

