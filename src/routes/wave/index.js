import { h, Component } from 'preact';
import style from './style';
import Flight from '../../components/flight';

function Line(props) {
	return (
		<path fill="none" id={props.id} class="line" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-miterlimit="10" d={props.d}  />
	)
}

class WavyLines extends Component {

	constructor() {
		super();
		this.state = {

		};
	}

	componentDidMount() {
		const warp = new Warp(this.lineGroup)
		this.setState({warp: warp})
		
		this.state.warp.interpolate(4)
		this.state.warp.transform(([x, y]) => [x, y, y])
		this.state.warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 16 + this.props.warpOffset), oy])
		
	}

	componentWillUpdate() {
		this.state.warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 16 + this.props.warpOffset), oy])
		return true
	}

	getSinOffset(x, maxOffset) {
		return this.sinValPercentageLoop(x) * maxOffset
	}

	getOffsetVal(init, x, maxOffset) {
		return init + this.getSinOffset(x, maxOffset)
	}

	

	sinValPercentageLoop(x) {
		let a  =  Math.sin((x / 100 ) * Math.PI * 2)
		return a
	}


	render() {
	return (<g  ref={(a) => { this.lineGroup = a; }} clip-path="url(#textClip)" id="lines">
		
		{this.props.lines.map((e, i)=> {
			let a = (this.getOffsetVal(225, this.props.colorShift, 75))
			let startX = 0
			let startY = (i*10) - 100
			let endX = 960
			let handleY1 = (this.getOffsetVal(333, this.props.handle, 200)) + startY
			let d="M"+startX+","+startY+" C344,"+handleY1+" 400,"+(333)+" "+endX+","+startY
			return <Line d={d} id={i == 27 ? 'bendy' : ''} key={i} strokeWidth={1} strokeColor={'hsl(' + a + ', 100%, 71%)'} />
		})}
	</g>);
	}

}



export default class Wave extends Component {
	constructor() {
		super();
		this.state = {
			colorShift: 0,
			lines: [
				{d: "M-43-85C147,27,345,13,465-55s420-36,522,30"},{d: "M-43.4-78.6c189.8,111.8,387.3,96,509.7,28.8 c122.6-67.2,420-35.3,521.8,29.8"},{d: "M-43.8-72.2C145.8,39.4,342.8,21.9,467.7-44.5 c125.2-66.4,420-34.7,521.6,29.6"},{d: "M-44.2-65.8C145.3,45.6,341.8,26.3,469-39.3 c127.8-65.5,420-34,521.4,29.5"},{d: "M-44.6-59.5C144.7,51.8,340.7,30.7,470.3-34.1 C600.8-98.8,890.4-67.5,991.5-4.8"},{d: "M-45-53.1C144.1,58,339.6,35.1,471.7-28.9 c133.1-63.9,420.1-32.7,521,29.1"},{d: "M-45.4-46.7C143.5,64.2,338.5,39.6,473-23.6 C608.7-86.7,893.1-55.7,993.8,5.3"},{d: "M-45.8-40.3C143,70.3,337.3,43.7,474.3-18.4 C612.5-81,894.4-49.8,994.9,10.4"},{d: "M-46.2-33.9c188.6,110.5,382.4,82,521.9,20.8 C616.4-75,895.8-43.9,996,15.4"},{d: "M-46.6-27.5C141.8,82.7,335.1,52.5,477-7.9 c143.3-61,420.1-30.1,520.1,28.4"},{d: "M-47-21.1c188.2,110.1,381,78,525.3,18.4 C624.3-63,898.5-32.2,998.3,25.5"},{d: "M-47.4-14.8c188,109.9,380.3,76,527.1,17.3 c148.5-59.5,420.2-28.8,519.7,28"},{d: "M-47.8-8.4C140.1,101.3,331.8,65.7,481,7.8 c151.1-58.7,420.2-28.2,519.5,27.9"},{d: "M-48.2-2c187.7,109.5,378.9,72.1,530.5,15 c153.7-57.9,420.2-27.5,519.3,27.7"},{d: "M-48.6,4.4c187.5,109.3,378.3,70.1,532.3,13.8 C640-38.9,903.9-8.7,1002.8,45.7"},{d: "M-49,10.8c187.3,109.1,377.6,68.1,534,12.7 c159-56.3,420.2-26.2,518.9,27.3"},{d: "M-49.4,17.2c187.2,108.9,376.9,66.1,535.7,11.5 C647.9-26.9,906.6,3.1,1005,55.8"},{d: "M-49.8,23.5c187,108.7,376.2,64.1,537.5,10.4 c164.2-54.7,420.3-24.9,518.5,27"},{d: "M-50.2,29.9C136.6,138.5,325.3,92.1,489,39.1 c166.8-54,420.3-24.3,518.3,26.8"},{d: "M-50.6,36.3c186.6,108.3,374.8,60.2,540.9,8 C659.7-8.8,910.6,20.7,1008.4,71"},{d: "M-51,42.7c186.4,108.1,374.2,58.2,542.7,6.9 c172-52.4,420.3-23,517.9,26.4"},{d: "M-51.4,49.1c186.3,108,373.5,56.2,544.4,5.7 c174.6-51.6,420.3-22.3,517.6,26.3"},{d: "M-51.8,55.5c186.1,107.8,372.8,54.2,546.1,4.6 c177.2-50.8,420.3-21.7,517.4,26.1"},{d: "M-52.2,61.9c185.9,107.6,372.1,52.3,547.9,3.4 c179.8-50,420.3-21,517.2,25.9"},{d: "M-52.6,68.2c185.7,107.4,371.4,50.3,549.6,2.3 c182.5-49.2,420.4-20.4,517,25.7"},{d: "M-53,74.6c185.6,107.2,370.8,48.3,551.3,1.1 c185.1-48.4,420.4-19.7,516.8,25.6"},{d: "M-53.4,81c185.4,107,370.1,46.3,553.1,0 c187.7-47.6,420.4-19.1,516.6,25.4"},{d: "M-53.8,87.4c185.2,106.8,369.4,44.4,554.8-1.2 c190.3-46.8,420.4-18.4,516.4,25.2"},{d: "M-54.2,93.8c185,106.6,368.7,42.4,556.5-2.4 c192.9-46,420.4-17.7,516.2,25"},{d: "M-54.6,100.2c184.8,106.4,368,40.4,558.3-3.5 c195.5-45.2,420.4-17.1,516,24.8"},{d: "M-55,106.6c184.7,106.2,367.4,38.5,560-4.7 c198.1-44.4,420.4-16.4,515.8,24.7"},{d: "M-55.4,112.9c184.5,106,366.7,36.5,561.7-5.8 c200.7-43.6,420.5-15.8,515.6,24.5"},{d: "M-55.8,119.3c184.3,105.8,366,34.5,563.5-7 C711,69.6,928.1,97.2,1023,136.7"},{d: "M-56.2,125.7c184.1,105.6,365.3,32.6,565.2-8.1 c206-41.9,420.5-14.5,515.2,24.1"},{d: "M-56.6,132.1c184,105.5,364.6,30.6,566.9-9.3 c208.6-41.1,420.5-13.8,514.9,24"},{d: "M-57,138.5c183.8,105.3,364,28.6,568.7-10.4 c211.2-40.3,420.5-13.2,514.7,23.8"},{d: "M-57.4,144.9c183.6,105.1,363.3,26.7,570.4-11.6 c213.8-39.5,420.5-12.5,514.5,23.6"},{d: "M-57.8,151.3c183.4,104.9,362.6,24.7,572.1-12.8 c216.4-38.7,420.5-11.9,514.3,23.4"},{d: "M-58.2,157.6c183.2,104.7,361.9,22.8,573.9-13.9 c219.1-37.9,420.6-11.2,514.1,23.2"},{d: "M-58.6,164C124.5,268.5,302.7,184.8,517,149 c221.7-37.1,420.6-10.6,513.9,23.1"},{d: "M-59,170.4c182.9,104.3,360.6,18.8,577.3-16.2 c224.3-36.3,420.6-9.9,513.7,22.9"},{d: "M-59.4,176.8c182.7,104.1,359.9,16.9,579.1-17.4 c226.9-35.5,420.6-9.3,513.5,22.7"},{d: "M-59.8,183.2c182.5,103.9,359.2,14.9,580.8-18.5 c229.5-34.6,420.6-8.6,513.3,22.5"},{d: "M-60.2,189.6c182.4,103.7,358.6,13,582.5-19.7 c232.1-33.8,420.6-8,513.1,22.4"},{d: "M-60.6,195.9c182.2,103.5,357.9,11,584.3-20.8 c234.7-33,420.7-7.3,512.9,22.2"},{d: "M-61,202.3c182,103.3,357.2,9,586-22c237.4-32.2,420.7-6.7,512.7,22"},{d: "M-61.4,208.7c181.8,103.1,356.5,7.1,587.7-23.2 c240-31.4,420.7-6,512.5,21.8"},{d: "M-61.8,215.1c181.6,102.9,355.8,5.1,589.5-24.3 c242.6-30.6,420.7-5.4,512.3,21.6"},{d: "M-62.2,221.5C119.3,324.2,293,224.7,529,196 c245.2-29.8,420.7-4.7,512,21.5"},{d: "M-62.6,227.9c181.3,102.6,354.5,1.2,592.9-26.6 c247.8-28.9,420.7-4.1,511.8,21.3"},{d: "M-63,234.3c181.1,102.4,353.8-0.7,594.7-27.8 c250.4-28.1,420.7-3.4,511.6,21.1"},{d: "M-63.4,240.6C117.5,342.8,289.7,238,533,211.7 c253.1-27.3,420.8-2.8,511.4,20.9"},{d: "M-63.8,247c180.8,102,352.5-4.6,598.1-30.1 c255.7-26.5,420.8-2.1,511.2,20.8"},{d: "M-64.2,253.4c180.6,101.8,351.8-6.6,599.9-31.2 c258.3-25.7,420.8-1.5,511,20.6"},{d: "M-64.6,259.8c180.4,101.6,351.1-8.6,601.6-32.4 c260.9-24.8,420.8-0.8,510.8,20.4"},{d: "M-65,266.2c180.2,101.4,350.4-10.5,603.3-33.6 c263.5-24,420.8-0.1,510.6,20.2"},{d: "M-65.4,272.6c180,101.2,349.8-12.5,605.1-34.7 c266.1-23.2,420.8,0.5,510.4,20"},{d: "M-65.8,279c179.9,101,349.1-14.4,606.8-35.9 c268.7-22.4,420.8,1.2,510.2,19.9"},{d: "M-66.2,285.3c179.7,100.8,348.4-16.4,608.5-37 c271.4-21.6,420.9,1.8,510,19.7"},{d: "M-66.6,291.7c179.5,100.6,347.7-18.3,610.3-38.2 c274-20.7,420.9,2.5,509.8,19.5"},{d: "M-67,298.1c179.3,100.4,347-20.3,612-39.3 c276.6-19.9,420.9,3.1,509.6,19.3"},{d: "M-67.4,304.5C111.8,404.7,279,282.3,546.3,264 c279.2-19.1,420.9,3.8,509.3,19.2"},{d: "M-67.8,310.9c179,100.1,345.7-24.2,615.5-41.6 c281.8-18.3,420.9,4.4,509.1,19"},{d: "M-68.2,317.3c178.8,99.9,345-26.1,617.2-42.8 c284.4-17.4,420.9,5.1,508.9,18.8"},{d: "M-68.6,323.7c178.6,99.7,344.3-28.1,618.9-44 c287.1-16.6,420.9,5.7,508.7,18.6"},{d: "M-69,330c178.4,99.5,343.7-30,620.7-45.1 c289.7-15.8,421,6.4,508.5,18.4"},{d: "M-69.4,336.4c178.3,99.3,343-32,622.4-46.3 c292.3-15,421,7,508.3,18.3"},{d: "M-69.8,342.8c178.1,99.1,342.3-33.9,624.1-47.4 c294.9-14.1,421,7.7,508.1,18.1"},{d: "M-70.2,349.2c177.9,98.9,341.6-35.9,625.9-48.6 c297.5-13.3,421,8.3,507.9,17.9"},{d: "M-70.6,355.6c177.7,98.7,340.9-37.8,627.6-49.7 c300.1-12.5,421,9,507.7,17.7"},{d: "M-71,362c177.6,98.5,340.3-39.7,629.3-50.9 c302.7-11.7,421,9.6,507.5,17.6"},{d: "M-71.4,368.3c177.4,98.3,339.6-41.7,631.1-52 c305.4-10.8,421.1,10.3,507.3,17.4"},{d: "M-71.8,374.7c177.2,98.1,338.9-43.6,632.8-53.2 c308-10,421.1,10.9,507.1,17.2"},{d: "M-72.2,381.1c177,97.9,338.2-45.6,634.5-54.4 c310.6-9.2,421.1,11.6,506.9,17"},{d: "M-72.6,387.5C104.2,485.3,264.9,340,563.7,332 c313.2-8.4,421.1,12.2,506.7,16.8"},{d: "M-73,393.9c176.7,97.6,336.9-49.5,638-56.7 c315.8-7.5,421.1,12.9,506.4,16.7"},{d: "M-73.4,400.3c176.5,97.4,336.2-51.4,639.7-57.8 c318.4-6.7,421.1,13.5,506.2,16.5"},{d: "M-73.8,406.7c176.3,97.2,335.5-53.4,641.5-59 c321-5.9,421.1,14.2,506,16.3"},{d: "M-74.2,413c176.1,97,334.8-55.3,643.2-60.1 c323.6-5.1,421.2,14.8,505.8,16.1"},{d: "M-74.6,419.4c176,96.8,334.2-57.3,644.9-61.3 c326.3-4.2,421.2,15.5,505.6,16"},{d: "M-75,425.8c175.8,96.6,333.5-59.2,646.7-62.4 c328.9-3.4,421.2,16.1,505.4,15.8"},{d: "M-75.4,432.2C100.2,528.6,257.4,371,573,368.6 c331.5-2.6,421.2,16.8,505.2,15.6"},
				{d: "M-75.8,438.6c175.4,96.2,332.1-63.1,650.1-64.8 c334.1-1.7,421.2,17.5,505,15.4"},{d: "M-76.2,445c175.2,96,331.4-65,651.9-65.9 c336.7-0.9,421.2,18.1,504.8,15.2"},{d: "M-76.6,451.4c175.1,95.8,330.8-68.4,653.6-67.1 c339.3,1.4,421.2,18.8,504.6,15.1"},{d: "M-77,457.7c174.9,95.6,330.1-68.9,655.3-68.2 c341.9,0.7,421.3,19.4,504.4,14.9"},{d: "M-77.4,464.1c174.7,95.4,329.4-70.9,657.1-69.4 c344.6,1.6,421.3,20.1,504.2,14.7"},{d: "M-77.8,470.5C96.7,565.8,250.9,397.7,581,400 c347.2,2.4,421.3,20.7,504,14.5"},{d: "M-78.2,476.9c174.4,95.1,328-74.8,660.5-71.7 c349.8,3.2,421.3,21.4,503.7,14.4"},{d: "M-78.6,483.3c174.2,94.9,327.3-76,662.3-72.8 c352.4,4.8,421.3,22,503.5,14.2"},{d: "M-79,489.7c174,94.7,326.7-78,664-74c355,5.6,421.3,22.7,503.3,14"},{d: "M-79.4,496.1c173.8,94.5,326-80,665.7-75.2 c357.6,6.4,421.3,23.3,503.1,13.8"},{d: "M-79.8,502.4c173.6,94.3,325.3-81.9,667.5-76.3 c360.2,7.2,421.4,24,502.9,13.6"},{d: "M-80.2,508.8C93.3,602.9,244.4,425,589,431.4 c362.8,8,421.4,24.6,502.7,13.5"},{d: "M-80.6,515.2c173.3,93.9,323.9-85.8,670.9-78.6 c365.4,8.9,421.4,25.3,502.5,13.3"},{d: "M-81,521.6c173.1,93.7,323.3-87.8,672.7-79.8 c368,9.7,421.4,25.9,502.3,13.1"},{d: "M-81.4,528C91.5,621.5,241.2,438.2,593,447 c370.7,10.5,421.4,26.6,502.1,12.9"},{d: "M-81.8,534.4c172.8,93.3,321.9-91.7,676.1-82.1 c373.3,11.3,421.4,27.2,501.9,12.8"},{d: "M-82.2,540.7c172.6,93.1,321.2-93.6,677.9-83.2 c375.9,12.1,421.5,27.9,501.7,12.6"},{d: "M-82.6,547.1c172.4,92.9,320.5-95.6,679.6-84.4 c378.5,12.9,421.5,28.5,501.5,12.4"},{d: "M-83,553.5C89.2,646.3,236.9,456,598.3,468 c381.1,13.8,421.5,29.2,501.3,12.2"},{d: "M-83.4,559.9c172,92.5,319.2-99.5,683.1-86.7 c383.7,14.6,421.5,29.8,501.1,12"},{d: "M-83.8,566.3C88.1,658.6,234.7,464.8,601,478.4 c386.3,15.4,421.5,30.5,500.8,11.9"},{d: "M-84.2,572.7c171.7,92.2,317.8-103.4,686.5-89 c388.9,16.2,421.5,31.1,500.6,11.7"},{d: "M-84.6,579.1c171.5,92,317.1-105.4,688.3-90.2 c391.5,17,421.5,31.8,500.4,11.5"},{d: "M-85,585.4c171.3,91.8,316.4-107.3,690-91.3 c394.2,17.8,421.6,32.4,500.2,11.3"},{d: "M-85.4,591.8c171.2,91.6,315.8-109.3,691.7-92.5 c396.8,18.7,421.6,33.1,500,11.2"},{d: "M-85.8,598.2c171,91.4,315.1-111.2,693.5-93.6 c399.4,19.5,421.6,33.7,499.8,11"},{d: "M-86.2,604.6C84.6,695.8,228.2,491.4,609,509.8 c402,20.3,421.6,34.4,499.6,10.8"},{d: "M-86.6,611C84,702,227.1,495.8,610.3,515 c404.6,21.1,421.6,35.1,499.4,10.6"},{d: "M-87,617.4c170.4,90.8,313-117.1,698.7-97.1 c407.2,21.9,421.6,35.7,499.2,10.4"},{d: "M-87.4,623.8C82.9,714.4,225,504.7,613,525.5 c409.8,22.8,421.6,36.4,499,10.3"},{d: "M-87.8,630.1c170.1,90.4,311.7-121,702.1-99.4 c412.4,23.6,421.7,37,498.8,10.1"},{d: "M-88.2,636.5c169.9,90.2,311-123,703.9-100.6 c415,24.4,421.7,37.7,498.6,9.9"},{d: "M-88.6,642.9C81.1,733,221.7,518,617,541.2 c417.7,25.2,421.7,38.3,498.4,9.7"},{d: "M-89,649.3c169.6,89.9,309.6-126.9,707.3-102.9 c420.3,26,421.7,39,498.1,9.6"},{d: "M-89.4,655.7c169.4,89.7,308.9-128.8,709.1-104 c422.9,26.8,421.7,39.6,497.9,9.4"},{d: "M-89.8,662.1C79.4,751.5,218.5,531.3,621,556.9 c425.5,27.7,421.7,40.3,497.7,9.2"},{d: "M-90.2,668.5c169,89.3,307.6-132.8,712.5-106.4 c428.1,28.5,421.7,40.9,497.5,9"},{d: "M-90.6,674.8c168.8,89.1,306.9-134.7,714.3-107.5 c430.7,29.3,421.8,41.6,497.3,8.8"},{d: "M-91,681.2c168.7,88.9,306.2-136.7,716-108.7 c433.3,30.1,421.8,42.2,497.1,8.7"},{d: "M-91.4,687.6C77.1,776.3,214.1,549,626.3,577.8 c435.9,30.9,421.8,42.9,496.9,8.5"},{d: "M-91.8,694c168.3,88.5,304.9-140.6,719.5-111 c438.5,31.7,421.8,43.5,496.7,8.3"},{d: "M-92.2,700.4C75.9,788.7,212,557.8,629,588.2 c441.2,32.6,421.8,44.2,496.5,8.1"},{d: "M-92.6,706.8c168,88.1,303.5-144.5,722.9-113.3 c443.8,33.4,421.8,44.8,496.3,8"},{d: "M-93,713.1c167.8,87.9,302.8-146.4,724.7-114.4 c446.4,34.2,421.9,45.5,496.1,7.8"},{d: "M-93.4,719.5C74.2,807.3,208.7,571.1,633,603.9 c449,35,421.9,46.1,495.9,7.6"},{d: "M-93.8,725.9c167.4,87.5,301.5-150.4,728.1-116.8 c451.6,35.8,421.9,46.8,495.7,7.4"},{d: "M-94.2,732.3C73,819.7,206.6,580,635.7,614.4 c454.2,36.7,421.9,47.4,495.5,7.2"},{d: "M-94.6,738.7C72.5,825.8,205.5,584.4,637,619.6 c456.8,37.5,421.9,48.1,495.2,7.1"},{d: "M-95,745.1c166.9,87,299.4-156.2,733.3-120.2 c459.4,38.3,421.9,48.7,495,6.9"},{d: "M-95.4,751.5c166.7,86.8,298.7-158.2,735.1-121.4 c462,39.1,421.9,49.4,494.8,6.7"},{d: "M-95.8,757.8c166.5,86.6,298-160.1,736.8-122.5 c464.7,39.9,422,50,494.6,6.5"},{d: "M-96.2,764.2c166.4,86.4,297.4-162.1,738.5-123.7 c467.3,40.7,422,50.7,494.4,6.4"},{d: "M-96.6,770.6c166.2,86.2,296.7-164,740.3-124.8 c469.9,41.6,422,51.3,494.2,6.2"},{d: "M-97,777c166,86,296-166,742-126c472.5,42.4,422,52,494,6"}
			],
			numLines: 10,
			handle: 0,
			warpOffset: 0,
			warp: null
		};
	}

	componentDidMount() {
		//let a = document.getElementsByClassName('line')
		//let lines = [].map.call(a, (e,i)=> {return '{d: "' + e.attributes.d.value + '"}'})
		//console.log(lines.toString())
		window.requestAnimationFrame(this.cycleColor.bind(this))

	}

	warpWave = () => {
		let newState = this.state
		newState.warpOffset += 0.1
		console.log(this.state.warpOffset)
		this.setState(newState)
		//window.requestAnimationFrame(this.warpWave.bind(this))
	}

	componentWillUpdate() {
	}

	cycleColor() {
		let newState = this.state
		//newState.colorShift = this.loop100(newState.colorShift)
		newState.handle = this.loop100(newState.handle)
		newState.warpOffset = this.loop100(newState.warpOffset)
		this.setState(newState)
		window.requestAnimationFrame(this.cycleColor.bind(this))
		
	}

	getColor(i, shift) {
		let a = i * 2.6
		let c = a + shift
		return this.reduceToValidColorValue(c)
	}

	getSin() {
		x = (Math.PI / 2) * x
		return Math.sin(X)
	}

	getHandleVal(c) {
		//c = c * 1.85
		if (c < 250) return c
		if (c < 500) return 250 - (c - 250)
		c = c - 500
		return this.getHandleVal(c)
	}

	reduceToValidColorValue(c) {
		if (c < 150) return c
		if (c < 300) return 150 - (c - 150)
		c = c - 300
		return this.reduceToValidColorValue(c)
	}

	getSinOffset(x, maxOffset, random) {
		return this.sinValPercentageLoop(x, random) * maxOffset
	}

	getOffsetVal(init, x, maxOffset, random) {
		return init + this.getSinOffset(x, maxOffset)
	}

	

	sinValPercentageLoop(x, random = false) {
		let a  =  Math.sin((x / 100 ) * Math.PI * 2 * Math.random())
		return a
	}



	loop100(x) {
		if (x > 99) return 0
		return x + 1 
	}


	boundValue(val, bound) {
		if (val < bound) return val
		if (val < (bound * 2)) return bound - (val - bound)
		return this.boundValue(val - (bound * 2))
  	}

	render() {
		return (
			<Flight {...this.props} >
			<section class={style.wave + ' flight'}>
			<svg class={style.svg} viewBox="0 150 960 340" version="1.1" id="Layer_4_copy" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id="textClip">
				<text transform="matrix(1 0 0 1 323.6213 435.9185)" font-family="'Montserrat-Bold'" font-size="89.4365">FANCY</text>
				<text transform="matrix(1 0 0 1 289.5024 255.9419)" font-family="'Montserrat-Bold'" font-size="89.4365">FLIGHTS</text>
				<text transform="matrix(1 0 0 1 415.6958 345.9305)" font-family="'Montserrat-Bold'" font-size="89.4365">OF</text>
				</clipPath>
			</defs>
			<g ref={(f) => { this.svgLines = f; }} clip-path="url(#textClip)" id="lines">
				
				{this.state.lines.map((e, i)=> {
					let a = 275 //(this.getOffsetVal(225, this.state.colorShift, 75))
					let startX = 250
					let startY = (i*5) - 100
					let endX = 700
					let handleY1 = (this.getOffsetVal(333, this.state.handle, 40, true))
					let d="M"+startX+","+(startY)+" C"+(startX+100+(handleY1/2))+","+((-handleY1/20) + startY)+" "+ (endX - 100 - (handleY1/2)) +"," + (handleY1/20 + startY) + " "+endX+","+(startY)
					return <Line d={d} id={i == 27 ? 'bendy' : ''} key={i} strokeWidth={1} strokeColor={'hsl(' + a + ', 100%, 71%)'} />
				})}
			</g>

			
				</svg>
			</section>
			<script src="assets/js/warp.js"></script>
			</Flight>
		);
	}
}

/*

{this.state.lines.map((e, i)=> {
					let a = Math.round( (this.getColor(i, this.state.colorShift)) + 210 )
					if ( a > 360 ) a = a - 360
					return <Line d={e.d} key={i} strokeWidth={1} strokeColor={'hsl(' + a + ', 100%, 71%)'} />
				})}
<WavyLines handle={this.state.handle} lines={this.state.lines} colorShift={this.state.colorShift} warpOffset={this.state.warpOffset} />
			
					
				*/