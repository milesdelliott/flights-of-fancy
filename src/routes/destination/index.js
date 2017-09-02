import { h, Component } from 'preact';
import style from './style';


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
			<section class={style.destination + ' flight'}>
				<h1 class={style.phrase}>
				</h1>
			</section>
		);
	}
}

