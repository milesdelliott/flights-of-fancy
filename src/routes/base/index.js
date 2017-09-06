import { h, Component } from 'preact';
import style from './style';


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
			<section class={style.base + ' flight'}>
				<h1 class={style.phrase}>
				</h1>
			</section>
		);
	}
}

