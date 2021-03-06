import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';

function SVGWrapper(props) {
	return (
		<svg class={style.svg+ ' ' + props.class} xmlns="http://www.w3.org/2000/svg" viewBox="0 100 960 860">
			{props.children}
		</svg>
	)
}

function Path(props) {
	return (
		<SVGWrapper class={props.class}>
			<path fill={props.fill ? props.fill : '#333'} d={props.d} />
		</SVGWrapper>
	);
}



function Circle(props) {
	return (
		<SVGWrapper class={props.class}>
			<circle fill={props.fill} cx={props.cx} cy={props.cy} r={props.r}/>
		</SVGWrapper>
	);
}

function Polygon(props) {
	return (
		<SVGWrapper class={props.class}>
			<polygon fill={props.fill} points={props.points} />
		</SVGWrapper>
	);
}

function Rect(props) {
	return (
		<SVGWrapper class={props.class}>
			<rect x={props.x} y={props.y} fill={props.fill} width={props.width} height={props.height} />
		</SVGWrapper>
	);
}


export default class Shine extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
		document.getElementById('container').addEventListener('mousemove', this.onMouseMove)
	}

	componentWillUnmount() {
	}

	onMouseMove(e) {
		let height = window.innerHeight/2
		let width = window.innerWidth/2
		let x = e.clientX;
		let y = e.clientY;
	
		let xVal = (x - width)/width
		let yVal = ((y - height)/height) * -1
		let dVal =  (Math.sqrt((xVal * xVal) + (yVal * yVal))) * 15
		document.getElementById('container').setAttribute('style', 'transform: rotate3d('+yVal+','+xVal+',0,'+dVal+'deg)');
	}

	render() {
		return (
			<Flight {...this.props} >
			<div class={style.wrapper}>
			<h2 class="extra-text">Flights of Fancy</h2>
			<p class="extra-text">Points Come into view <br /> Shapes latching onto you <br /> There's nothing you can do. <br /><br /> Hold True.</p>
			<section id="container" class={style.shine + ' flight'} style>
				<Path class={style.f_stem} fill="#0FF" d="M105 202v164h68.2l19.6-56h21l19-54h15l19.2-54"/>
				<Path class={style.f_stem_stroke} d="M173.2 369h-67.5c-2 0-3.7-1.3-3.7-3.3v-164c0-2 1.8-3.7 3.7-3.7H267c1 0 2.2.7 3 1.6s.7 2.2.3 3.3L251 256.7c-.4 1.4-1.7 2.2-3.2 2.2h-12.5L217 310.7c-.4 1.4-1.7 2.3-3.2 2.3h-18.5l-18.7 53.7c-.5 1.4-2 2.3-3.4 2.3zm-64.2-7h61.8l18.7-53.7c.5-1.4 1.8-2.3 3.3-2.3h18.5l18.2-51.7c.5-1.4 1.8-2.3 3.3-2.3h12.5l16.7-47H109v157z"/>
				<Path  class={style.i_stem} fill="#FCEE21" d="M348 188h56v191h-56z"/>
				<Path  class={style.i_stem_stroke} d="M408 378.5c0 2-1.6 3.5-3.5 3.5h-56c-2 0-3.5-1.6-3.5-3.5v-191c0-2 1.6-3.5 3.5-3.5h56c2 0 3.5 1.6 3.5 3.5v191zm-56-3.5h49V191h-49v184z"/>
				<Path class={style.h_crossbar} fill="#8CC63F" d="M539 253h82v70h-82z"/>
				<Path class={style.h_crossbar_stroke} d="M625 322.5c0 2-1.6 3.5-3.5 3.5h-82c-2 0-3.5-1.6-3.5-3.5v-70c0-2 1.6-3.5 3.5-3.5h82c2 0 3.5 1.6 3.5 3.5v70zm-82-3.5h75v-63h-75v63z"/>
				<Path class={style.h_leftstem} fill="#8CC63F" d="M579.3 379l24.4-191H525v191"/>
				<Path class={style.h_leftstem_stroke} d="M579.3 382h-53.5c-2 0-3.7-1.3-3.7-3.3v-191c0-2 2-3.7 3.8-3.7h78c1 0 2 .6 2.6 1.3.7.8 1 1.8.8 2.8l-24.5 191c-.2 1.8-1.7 3-3.4 3zm-50.3-7h47.2l23.6-184H529v184z"/>
				<Path class={style.h_rightstem} fill="#8CC63F" d="M685 379V188h-57.8l-25 191"/>
				<Path class={style.h_rightstem_stroke} d="M685.7 382h-83.5c-1 0-2-.3-2.6-1-.7-1-1-1.8-.8-2.8l25-191c.2-1.8 1.7-3.2 3.5-3.2h58.5c2 0 3.3 1.8 3.3 3.7v191c0 2-1.3 3.3-3.3 3.3zm-79.5-7H682V191h-51.7l-24 184z"/>
				<Path class={style.t_crossbar} fill="#FF0" d="M647 183h155v57H647z"/>
				<Path class={style.t_crossbar_stroke} d="M806 239.5c0 2-1.6 3.5-3.5 3.5h-155c-2 0-3.5-1.6-3.5-3.5v-57c0-2 1.6-3.5 3.5-3.5h155c2 0 3.5 1.6 3.5 3.5v57zM651 236h148v-50H651v50z"/>
				<Path class={style.t_stem} fill="#FF0" d="M695 216v163h56V216"/>
				<Path class={style.t_stem_stroke} d="M751.7 382h-56c-2 0-3.7-1.3-3.7-3.3V216.2c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V375h49V216.2c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v162.5c0 2-1.3 3.3-3.3 3.3z"/>
				<Path class={style.l_stem} fill="#F7931E" d="M354.5 291H306l8-73h-95v147h151.7"/>
				<Path class={style.l_stem_stroke} d="M370.7 368h-151c-2 0-3.7-1.3-3.7-3.3v-147c0-2 1.8-3.7 3.7-3.7H314c1 0 2 .5 2.6 1.3.7.7 1 1.7 1 2.7l-7.8 69h44.6c1.6 0 3 1.4 3.4 3l16.3 74c.3 1 0 2-.6 3-.6.6-1.6 1-2.7 1zM223 361h143.4l-14.8-67H306c-1 0-2-.3-2.7-1-.7-.7-1-1.8-1-2.8l7.8-69.2h-87v140z"/>
				<Path class={style.s_bottom} fill="#0071BC" d="M853 315.5c0 31.2-24.2 58.3-55.4 58.3S742.3 350 742.3 319H794v-60c32 0 59 25.3 59 56.5z"/>
				<Path class={style.s_bottom_stroke} d="M797.7 377c-33 0-59-25.7-59-58.4 0-2 1.6-3.6 3.5-3.6H791v-56c0-2 1.7-3.5 3.6-3.5 34.2 0 62 27 62 60 0 34-26.3 61.6-59 61.6zM746 322c.7 13 6 24.4 14.8 33.2 9.7 9.5 22.8 15 37 15 28.7 0 52-24.6 52-54.7 0-28-22.7-51-51.7-53V319c0 2-1.2 3.3-3.2 3.3h-49z"/>
				<Path class={style.s_top} fill="#D4145A" d="M740 257c0-31.3 26.4-55 57.6-55 31.2 0 57.7 28 57.7 58H794v53.5c-31 0-54-25.4-54-56.6z"/>
				<Path class={style.s_top_stroke} d="M794.6 317c-32.5 0-58-26.5-58-60 0-16 6.6-31 18.3-42 11.4-10.7 26.6-16.7 42.8-16.7 32.5 0 61 28.6 61 61.3 0 2-1.6 3.4-3.5 3.4H798v50.4c0 2-1.4 3.5-3.4 3.5zm3-111.7c-29.7 0-54 23-54 51.6 0 28.4 20.4 51 47.4 52.8v-50c0-2 1.8-3.7 3.7-3.7h57c-1-12-6.7-24.5-16-34-10.3-10.7-24.2-16.7-38-16.7z"/>
				<Path class={style.g_stem} fill="#D4145A" d="M433.7 315l18-64H542c-13-28-41.3-46.6-73.8-46.6-45.3 0-82 36.6-82 82s36.7 82 82 82c35.3 0 65.3-22.4 77-53.4H433.6z"/>
				<Path class={style.g_stem_stroke} d="M468.2 371.7c-47 0-85.5-38.4-85.5-85.5s38.4-85.5 85.5-85.5c32.5 0 62.7 19 77 48.2.2.4.4 1 .4 1.6 0 2-1.6 3.4-3.5 3.4h-87.6l-16 57H545c1.2 0 2.3.7 3 1.6s.8 2.2.4 3.3c-12.3 33.3-44.6 55.7-80.2 55.7zm0-164c-43.3 0-78.5 35.2-78.5 78.5s35.2 78.4 78.5 78.4c31 0 59.2-18.6 71.7-46.6H433.6c-1 0-2-.4-2.8-1.3-.8-1-1-2-.7-3l18-64c.4-1.6 1.8-2.7 3.4-2.7h84.6c-13.8-24-40-39.4-68-39.4z"/>
				<Path class={style.f_crossbar} fill="#0FF" d="M161 310h52.8l19-54H161"/>
				<Path class={style.f_crossbar_stroke} d="M213.8 313h-52.6c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h50l16.7-47h-66.7c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5H233c1 0 2 .7 2.8 1.6.7 1 .8 2.2.4 3.2l-19 54c-.6 1.4-2 2.2-3.4 2.2z"/>
				<Path class={style.g_crossbar} fill="#D4145A" d="M537 322h21.7l13-43h-96l-13 43H510"/>
				<Path class={style.g_crossbar_stroke} d="M558.7 325h-21.5c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h19l10.8-36h-88.7l-11 36h43c1.8 0 3.4 1.6 3.4 3.5s-1.6 3.5-3.5 3.5h-47.5c-1 0-2-.4-2.8-1.3-.8-1-1-2-.6-3l13-43c.4-1.6 1.8-2.7 3.4-2.7h96c1 0 2.2.6 2.8 1.5.7 1 1 2 .5 3.2l-13 43c-.4 1.4-1.7 2.3-3.3 2.3z"/>
				<Polygon class={style.i_crossbar} fill="#FCEE21" points="408,198.1 408,171 344,171 344,221 	"/>
				<Path class={style.i_crossbar_stroke} d="M344.7,224.5c-0.7,0-1.5-0.2-2.1-0.6c-0.9-0.7-1.6-1.7-1.6-2.9v-50.3c0-1.9,1.8-3.7,3.7-3.7h64c1.9,0,3.3,1.8,3.3,3.7v27.4 c0,1.5-0.8,2.8-2.2,3.3l-63.9,22.9C345.5,224.5,345.1,224.5,344.7,224.5z M348,174v42.1l57-20.4V174H348z"/>
				<Path class={style.fa_main} fill="#FBB03B" d="M896 580H138V404h186v-38H100V1191h38V618h758"/>
				<Path class={style.fa_main_stroke} d="M138.7 1194h-38c-2 0-3.7-1.3-3.7-3.3v-825c0-2 1.8-3.7 3.7-3.7h224c2 0 3.3 1.8 3.3 3.7v38c0 2-1.3 3.3-3.3 3.3H142v169h754.7c2 0 3.3 1.8 3.3 3.7v38c0 2-1.3 3.3-3.3 3.3H142v569.7c0 2-1.3 3.3-3.3 3.3zm-34.7-7h31V617.7c0-2 1.8-3.7 3.7-3.7H893v-31H138.7c-2 0-3.7-1.3-3.7-3.3v-176c0-2 1.8-3.7 3.7-3.7H321v-31H104v818z"/>
				<Path class={style.c_main} fill="#FBB03B" d="M720.7 547c-15 69-77.2 121.6-151.5 121.6-66 0-122.5-41.5-144.8-99.8-6.6-17.2-10.2-36-10.2-55.4 0-85.6 69.4-154.7 155-154.7 80.5 0 146.7 61.3 154.3 140.3h36c-7.6-99-90-176.4-190.3-176.4-105.5 0-191 85.3-191 190.8 0 35 9.4 68 26 96 33 57 94.5 95.2 165 95.2 94.2 0 172.5-68.7 188.2-157.7h-36.7z"/>
				<Path class={style.c_main_stroke} d="M569.2 708c-34.6 0-68.6-9-98.3-26.6-29-17-53-41.2-70-70-17.2-29.7-26.3-63.6-26.3-98 0-52 20.2-100.8 57-137.5 36.7-36.8 85.6-57 137.5-57 49.3 0 96.4 18.4 132.4 52 35.8 33.2 57.6 78.3 61.5 127l.2.6c0 2-1.6 3.4-3.5 3.4h-36c-2 0-3.4-1.2-3.6-3-3.5-37.5-20.8-72-48.5-97.4-28-25.6-64.3-39.6-102.3-39.6-83.5 0-151.5 68-151.5 151.3 0 18.7 3.4 37 10 54.2 10.8 28.4 29.8 52.6 54.7 70 25.6 18 55.6 27.5 86.8 27.5 34.7 0 68.7-12 95.7-34.2 26.4-21.7 45-52 52.2-85 .4-1.5 1.8-2.8 3.4-2.8h36.7c1 0 2 .6 2.7 1.4s1 2 .8 3c-7.8 44.2-31 84.8-65.8 114.3-35 30-79.8 46.4-125.8 46.4zm0-382c-50 0-97.2 19.5-132.6 55-35.4 35.3-55 82.3-55 132.4 0 33.2 9 66 25.5 94.4 16.3 28 39.6 51.2 67.4 67.6 28.6 16.8 61.4 25.7 94.8 25.7 44.3 0 87.4-16 121.3-44.7C723 628.7 745 591 753.2 550h-29.7c-8 34-27 64-54 86-28.3 23.2-64 36-100.2 36-32.7 0-64-10-90.8-28.6-26-18.3-46-43.6-57.2-73.3-7-18-10.4-37-10.4-56.6 0-42.3 16.4-82 46.3-112 30-30 69.7-46.3 112-46.3 39.8 0 77.8 14.7 107 41.4 28.3 25.8 46.2 60.7 50.6 98.7h29c-4.3-45-25.2-87.7-59-119-35-32.3-80.2-50-127.8-50z"/>
				<Path class={style.n_main} fill="#FBB03B" d="M526 369v258.6l-160-209-38-49.7v371h38V481l160 209 38 49.7V369"/>
				<Path class={style.n_main_stroke} d="M366.7 743h-38c-2 0-3.7-1.3-3.7-3.3V369c0-1.6 1-3 2.5-3.4 1.4-.5 3 0 3.8 1.2L523 617.2V368.7c0-2 1.8-3.7 3.7-3.7h38c2 0 3.3 1.8 3.3 3.7v371c0 1.5-.8 2.8-2.3 3.3-1.4.5-3 0-3.8-1.2l-38.2-49.6L370 491.4v248.4c0 2-1.3 3.2-3.3 3.2zm-34.7-7h31V481c0-1.5 1-2.8 2.5-3.3 1.4-.5 3 0 3.8 1.2L561 729.3V372h-31v255.6c0 1.5-.8 2.8-2.3 3.3-1.4.4-3 0-4-1.3L332 379.2V736z"/>
				<Path class={style.a_main}  fill="#FBB03B" d="M229.6 419.2L191 369.5V432l.2 308.3 37.4.2 1-258.7L548 899v-62.4"/>
				<Path class={style.a_main_stroke} d="M548 902.6c-1 0-2-.5-2.8-1.4L233.2 492l-1 248.4c0 2-1.6 3.5-3.5 3.5l-37.3-.2c-2 0-3.6-1.6-3.6-3.5L188 432v-62.5c0-1.5 1-2.8 2.5-3.3 1.4-.5 3 0 4 1.2l38.3 49.8L551 834.5c.5.6.7 1.4.7 2v62.6c0 1.6-1 3-2.5 3.4-.4.2-.8.2-1.2.2zM229.8 478.3c1 0 2 .5 2.8 1.4l312 409.2v-51L227.2 421.3l-32-41.6V737h30.3l1-255.2c0-1.5 1-2.8 2.4-3.3.4-.2.8-.2 1-.2z"/>
				<Path class={style.y_main} fill="#FBB03B" d="M826 339l-29.8-23.5-174 221.2-138-175.2-30 23.5L603 574v267h38V574"/>
				<Path class={style.y_main_stroke} d="M641.7 844h-38c-2 0-3.7-1.3-3.7-3.3V575.2l-148.2-188c-1.2-1.6-1-3.8.6-5l29.7-23.5c.8-.6 1.8-.8 2.7-.7s1.8.6 2.3 1.3L622.3 531l171.3-217.7c1.2-1.5 3.4-1.8 5-.6l30 23.5c.6.6 1 1.4 1.2 2.3 0 1-.3 2-.8 2.6L645 575.3v265.5c0 2-1.3 3.3-3.3 3.3zm-34.7-7h31V574c0-.8.4-1.5 1-2.2l182.4-232.3-24.4-19-172 218.4c-.6.7-1.6 1.2-2.6 1.2s-2-.5-2.7-1.3l-136-172.6-24 19.2L606.3 572c.5.5.6 1.3.6 2v263z"/>
				<Path class={style.o_main} fill="#FF0" d="M387 348.4h80.6V429H387z"/>
				<Path class={style.o_main_stroke} d="M467.7 432.5h-80.5c-2 0-3.5-1.6-3.5-3.5v-80.5c0-2 1.6-3.5 3.5-3.5h80.5c2 0 3.5 1.6 3.5 3.5V429c0 2-1.6 3.5-3.5 3.5zm-77-7H464V352h-73.4v73.5z"/>
				<Path class={style.o_dot} d="M429.4 394.2h-4c-2 0-3.5-1.6-3.5-3.5v-4c0-2 1.5-3.5 3.4-3.5h4c2 0 3.5 1.6 3.5 3.5v4c0 2-1.7 3.5-3.6 3.5z"/>
				<Path class={style.of_main} fill="#FF0" d="M467 349v80h58v-10h23v-70"/>
				<Path class={style.of_main_stroke} d="M525.7 432h-58c-2 0-3.7-1.3-3.7-3.3v-80c0-2 1.8-3.7 3.7-3.7h81c2 0 3.3 1.8 3.3 3.7v70c0 2-1.3 3.3-3.3 3.3H529v6.7c0 2-1.3 3.3-3.3 3.3zm-54.7-7h51v-6.3c0-2 1.8-3.7 3.7-3.7H545v-63h-74v73z"/>
				<Path class={style.of_main_stroke} d="M527.5 382.7h17.7v4h-17.7z"/>
				<Path class={style.of_main_stroke} d="M545.2 390.2h-17.8c-2 0-3.5-1.6-3.5-3.5v-4c0-2 1.5-3.5 3.4-3.5h17.8c2 0 3.5 1.6 3.5 3.5v4c0 2-1.5 3.5-3.5 3.5z"/>
				<Circle class={style.right_dot_main} fill="#FBB03B" cx="937" cy="597" r="22.2"/>
				<Path class={style.right_dot_stroke} d="M937 622.7c-14.2 0-25.7-11.5-25.7-25.7s11.5-25.7 25.7-25.7 25.7 11.5 25.7 25.7-11.6 25.7-25.7 25.7zm0-44.4c-10.3 0-18.7 8.4-18.7 18.7s8.4 18.7 18.7 18.7 18.7-8.4 18.7-18.7-8.4-18.7-18.7-18.7z"/>
				<Circle class={style.lower_dot_main} fill="#FBB03B" cx="119" cy="1241" r="22.2"/>
				<Path class={style.lower_dot_stroke} d="M119 1266.7c-14.2 0-25.7-11.5-25.7-25.7s11.5-25.7 25.7-25.7 25.7 11.5 25.7 25.7-11.6 25.7-25.7 25.7zm0-44.4c-10.3 0-18.7 8.4-18.7 18.7s8.4 18.7 18.7 18.7 18.7-8.4 18.7-18.7-8.4-18.7-18.7-18.7z"/>

			</section>
			</div>
			</Flight>
		);
	}
}

