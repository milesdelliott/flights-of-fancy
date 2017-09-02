import { h, Component } from 'preact';
import style from './style';

function Word(props) {
	function getRotation() {
		return ((Math.random()*2)-1)*20
	}
	function getStyle(currentWord, text, letter, i, splitWord, rotation, axis, sign) {
		if (!currentWord) return ''
		if (splitWord) return 'transform: translateX('+(i < text.length / 2 ? '-' : '+')+'1em) rotateZ('+rotation+'deg)'
		if (i !== letter) return ''
		return 'transform: translate'+axis+'('+sign+'1em) rotateZ('+rotation+'deg)'
	}

	return (
		<span class={style.word}> {
			props.text.split('').map((l, i)=> {
				return (<span style={getStyle(props.currentWord, props.text, props.letter, i, props.splitWord, getRotation(), props.axis, props.sign)} class={style.letter}>{l}</span>)
				})
			}</span>
	)
}

export default class Typewriter extends Component {
	constructor() {
		super();
		this.state = {
			phrase: 'flights of fancy',
			current: [0, 0],
			splitWord: 1
		};
	}

	createWordMap(phrase, splitWord) {
		return phrase.split(' ').map((word, i)=> {
			return i == splitWord ? 1 : word.length
		})
	}

	getNextLetter(current, wordMap) {
		let word = current[0]
		let letter = current[1]
		const nextWord = letter === (wordMap[word] - 1)
		const restart = word === wordMap.length-1
		letter = nextWord ? 0 : letter + 1
		word = nextWord ? word+1 : word
		word = restart && nextWord ? 0 : word
		return [word, letter]
	}

	componentDidMount() {
		this.setState({
			wordMap: this.createWordMap(this.state.phrase, this.state.splitWord)
		})
		this.letterTimer = setInterval(() => {
			this.setState({ current: this.getNextLetter(this.state.current, this.state.wordMap) });
		}, 750);
	}

	componentWillUnmount() {
		clearInterval(this.letterTimer);
	}

	render() {
		return (
			<section class={style.typewriter + ' flight'}>
				<h1 class={style.phrase}>
					{this.state.phrase.split(' ').map((word, i) => {
						return <Word text={word} currentWord={i===this.state.current[0]} letter={this.state.current[1]} splitWord={i==this.state.splitWord} axis={'Y'} sign={(i === 0) ? '-' : '+'} key={i} />
					})}
				</h1>
			</section>
		);
	}
}

