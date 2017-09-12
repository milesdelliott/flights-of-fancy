import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';


export default class Base extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.base + ' flight'}>
				<h1 class={style.phrase}>
				</h1>
			</section>
			</Flight>
		);
	}
}

