import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';


function Path(props) {
	return (
		<path class="letter" id={props.id} fill="none" stroke-width={props.strokeWidth} stroke={props.strokeColor} stroke-miterlimit="10" d={props.d}  />
	)
}

export default class Glide extends Component {
	constructor() {
		super();
		this.state = {
			inPlace: true,
			show: false,
			paths: [
				{id: "f1_top", pointA: '00', pointB: '100', d: "M118.4 142.2c-11.8 2-23.8 3-35.7 3"},
				{id: "f1_crossbar", pointA: '00', pointB: '100', d: "M114 173.3c-10 1.6-21 2.4-31.3 2.3"},
				{id: "f1_stem", pointA: '00', pointB: '70', d: "M83.2 145.3V206c0 37-90 142.2-200.7 39.2S-213.8-33.2-59-33.2c90.4 0 239.3-24.8 314.5-60.2"},
				{id: "f2_top", pointA: '00', pointB: '60', d: "M264.8 197c10.3-4 20.5-8.2 30.7-12.5 124.8-52.3 341.4-284.7 352-308"},
				{id: "f2_crossbar", pointA: '00', pointB: '30', d: "M264.8 225l27-11c87.6-43.6 570-277 637-290"},
				{id: "f2_stem", pointA: '00', pointB: '80', d: "M265.2 196.8v55.8c0 93.3 5.4 164-6 212C248 513 91.7 695 91.7 695"},
				{id: "f3_top_right", pointA: '00', pointB: '40', d: "M118 349.8c12.4-3 24.6-7 36.5-11.4 32-16.6 53.7-37.7 61.2-58s12.8-91-58-79.7C87.2 212 54.8 298.5 45 349S90 486.5 135 499.2c45 12.8 229.4 20.8 269.3 17.6"},
				{id: "a1_crossbar", pointA: '00', pointB: '80', d: "M198 358.2c-11 5-21.7 9.7-32.6 14.3"},
				{id: "f3_stem", pointA: '00', pointB: '60', d: "M118.6 410.2v-60.4c-174 30-402 70.8-402 70.8"},
				{id: "n1_left", pointA: '00', pointB: '80', d: "M219.3 311c0 19.6.2 39 .3 58.7 0 102.6-83.7 171-198.8 244.7"},
				{id: "n1_right", pointA: '00', pointB: '80', d: "M261 354v-58.8c0-111 0-275 17-329.2 15-47.4 68.6-182 68.6-182"},
				{id: "y1_stem", pointA: '00', pointB: '80', d: "M344 291.6v26.6c0 99-65 230.7-161.4 307.5"},
				{id: "a1_left", pointA: '00', pointB: '80', d: "M181.3 327.6L156 397.4C130.6 464 45 552-92.8 650.4"},
				{id: "a1_right", pointA: '00', pointB: '80', d: "M181.7 327.4c8.6 15.7 17.2 31.5 25.6 47.4 41.6 73.4 125 131.3 321.4 94.4S768 456.4 768 456.4"},
				{id: "n1_diagonal", pointA: '00', pointB: '80', d: "M219.3 311c15 13.3 28.5 27.8 41.8 42.7"},
				{id: "t1_top", pointA: '210', pointB: '260', d: "M307.5-65.6S386.2-67 399.3-22c14.3 49-27.8 80.5-43.6 86C342 67 329 71 316 76c-13.7 5-70.8 44.2-1.6 94S504.7 271.3 616 281c111.3 9.8 155.7 18 155.7 18"},
				{id: "t1_stem", pointA: '600', pointB: '675', d: "M843.8 399.3s-143-6-314.4-75.2-194-149.6-194-195.8v-59C335.5-5 345-91 360-158"},
				{id: "h1_crossbar", pointA: '00', pointB: '80', d: "M305.2 110l-37.7 15"},
				{id: "g1_crossbar", pointA: '00', pointB: '80', d: "M250.8 136c-5.5 1.8-8.5 2.8-14.2 5"},
				{id: "h1_left", pointA: '330', pointB: '430', d: "M484.2-161C400-129 267.6-23.6 268 95.3v59c0 69.6 20.6 126.7 60.5 226s216 219.6 216 219.6"},
				{id: "g1_right", pointA: '00', pointB: '80', d: "M250.5 135.7v19"},
				{id: "h1_right", pointA: '250', pointB: '360', d: "M253.3-203.2c15 25.6 51.2 225 52 283.4v59.2C305.3 200 327.8 430 227 564"},
				{id: "l1_bottom", pointA: '00', pointB: '40', d: "M133.6 199.4c11-2.7 21.5-5.7 32.2-9 29.5-10.7 89.7 15.6 50.6 100.6S43.4 472.3 17 488.8C-9 505.3-219.7 606-320.5 409"},
				{id: "l1_stem", pointA: '00', pointB: '80', d: "M134 199.5v-60C133.6 74.2 67.4-47 3.5-73.2"},
				{id: "i1_stem", pointA: '250', pointB: '350', d: "M93-134C137.6-58 181 46.5 181 126.5c0 19.7.2 39.4.4 59 0 96.4 38.3 236.4 216.6 266.5 178.2 30 209.8-74.5 376-24"},
				{id: "o1_stem", pointA: '00', pointB: '200', d: "M242.4 252c-4.8 7.5-12 13.4-20 16.6-8 3.2-16 3.5-21-.2-4.5-3.3-6.7-9.8-6.7-17.2 0-7.4 2-15.7 6.3-22.5 5-7.8 13-13.8 21-16.8s15.2-3 20 1c4.4 3.4 6.8 10 6.8 17.4 0 7.2-2 15-6.4 21.7z"},
				{id: "c1_stem", pointA: '255', pointB: '380', d: "M294 522c66-219 33-242 22.6-245.3-4.5-1.5-9.8-2-16.4 1-6.8 3-13.6 9.5-18 17.2-3.7 6.7-5.5 15-5.5 22.8 0 7.7 2 14.7 5.7 18.5 4.4 4.3 11 4.8 17.8 1.7 6.4-3 14-8.6 17.4-16.5 65.2-158.3 125.2-283.3 117.7-421"},
				{id: "g1_stem", pointA: '00', pointB: '140', d: "M250.7 154.5c-5.2 6-13.8 11-22.8 14.4-8 2.8-16 2.6-21-1.4-4.5-3.6-6.7-10.3-6.7-18s2-16 6.3-23c4.7-7.6 13.7-14.8 22-17.7 9-3.3 15.3-3.3 20-.8"},
				{id: "y1_right", pointA: '00', pointB: '100', d: "M344.3 291.8c6.3-13.6 12.8-27 19.6-40.5C427 141.3 581 12 618.7-7S816-78.3 816-78.3"},
				{id: "y1_left", pointA: '00', pointB: '70', d: "M344 292l-18.8-25.2c-18.4-30-147-21.7-309.6 29.5S-238 455.8-238 455.8"},
				{id: "s1_stem", pointA: '500', pointB:'630', d: "M873 145c-243.6 61.7-418-33-480.3-80.7-3-2.2-8.2-5.4-13.4-5-6.4.6-14.8 6.6-15 17.2 0 6.8 6.4 11 15 11.8 13.7 1.4 15.4 9.4 15.4 12.2 0 10-9.2 16.7-18.5 18-7.2.8-12.2-2.5-14.4-4.8C284 33.5 215.6-79.3 138-241"},
				{id: "f3_stem_low", pointA: '00', pointB: '70', d: "M118.6 410.2c0 66.6-12 172.7-133 324.6"},
				{id: "f3_crossbar", pointA: '478', pointB: '510', d: "M-344 501S63 396 118 380c11-3 21.4-6.2 32-10 44.6-17.3 213-54.2 357.5-152.7s292-229.5 292-229.5"}
			]
		};
	}

	componentDidMount() {/*
		this.state.paths.forEach(function(e, i) {
			this.draw(e, i);
		}, this);
		this.setState({inPlace:true});
	*/}

	draw(e, i) {
		let pointA = e.pointA || '10%';
		let pointB = e.pointB || '40%';

		return TweenLite.fromTo("#"+e.id, 2, {drawSVG: "100% 100%"}, {drawSVG: pointA + " " + pointB, delay: 0, ease: Power1.easeInOut})
	}

	drawAccent(e, i) {
		let pointA = e.pointA || '10%';
		let pointB = e.pointB || '40%';

		return TweenLite.fromTo("#"+e.id+"_c", 1, {drawSVG: "100% 100%"}, {drawSVG: pointA + " " + pointB, delay: 0, ease: Power1.easeOut})
	}

	componentWillUnmount() {
	}

	tweensInit() {
		
	}

	runAnim() {
		let newState = this.state
		if (!newState.tweens) {
			let tweens = newState.paths.map(function(e, i) {
				let a = this.draw(e, i);
				return a
			}, this);
			let accentTweens = newState.paths.map(function(e, i) {
				return this.drawAccent(e, i);
			}, this);

			newState.tweens = accentTweens.concat(tweens)

		} else {
			newState.tweens.map((e, i)=> {
				let reverse = e.reversed() == false ? false : true
				
				reverse ? e.play() : e.reverse()
			})

			
		}
		newState.show = true;
		this.setState(newState)
	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.glide + ' flight'} onClick={this.runAnim.bind(this)}  >
				<svg class={style.glide + ' ' + (this.state.show ? style.show : '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465 532.5" >
				<g>
				{this.state.paths.map((e, i)=> {
					return <Path id={e.id+"_c"} d={e.d} key={i} strokeWidth={1} strokeColor={'#FFFFFF'} />
				})}
				</g>
				<g>
				{this.state.paths.map((e, i)=> {
					return <Path id={e.id} d={e.d} key={i} strokeWidth={2} strokeColor={'#22313F'} />
				})}
				</g>
				
				
				</svg>
				<script src="assets/js/TweenLite.min.js"></script>
				<script onLoad={this.runAnim.bind(this)} src="assets/js/DrawSVGPlugin.min.js"></script>
			</section>
			</Flight>
		);
	}
}

