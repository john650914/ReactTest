import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';


/*class Apple extends React.Component{
	render(){
		return (
			<div>
				<h1>This is an apple!!!</h1>
				<img src={require("./images/smile.png")} />
			</div>
		);
	}
}*/

/*<div className="myDiv">div1</div>
<div className="myDiv">div2</div>
<div className="myDiv">div3</div>
<div className="myDiv">div4</div>
<div className="myDiv">div5</div>
<div className="myDiv">div6</div>
<div className="myDiv">div7</div>
<div className="myDiv">div8</div>*/


const myData = [ "div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8" ];


class SlideTest extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			swipe: false,
			slickGoTo: 2,
			responsive: [
				{breakpoint:376, settings:{slidesToShow:1, swipe:true}},
				{breakpoint:769, settings:{slidesToShow:1, swipe:true, slidesToScroll:1, centerMode:true, centerPadding:"60px"}},
				{breakpoint:1921, settings:{slidesToShow:5}}
			]
		};
		return (
			<Slider {...settings} className="mySlide">
				{
					myData.map(v => <div className="myDiv" key={v}>{v}</div>)
				}
			</Slider>
		);
	}
}

ReactDOM.render(<SlideTest />,document.getElementById('fruit'));
