require('../sass/main.sass');
require("font-awesome-sass-loader");

import React from 'react';

class Itinery extends React.Component{
		constructor(props) {
			super(props);
		}

		componentWillMount() {
			//console.log('it', this.props.it);

		}

		render(){
			return (
							<div className="itinery">
								<div className="place" style={ {backgroundImage: 'url(' + this.props.it.imgUrl + ')'} }>
									<div className="days">
										<span className="bigDay">{this.props.it.days}</span> Day
									</div>
								</div>
								<div className="content">
									<h5 className="auther">
									<span className="head" style={{ backgroundImage: 'url(' + this.props.it.autherUrl + ')' }} alt=""></span>{this.props.it.auther}</h5>
									<h2 className="title">{this.props.it.title}</h2>
									<ul className="note">
										<li className="date">{this.props.it.date}</li>
										<li className="love">{this.props.it.love}</li>
										<li className="noted">{this.props.it.noted}</li>
									</ul>

									<ul className="subTitle ellipsis multiline">
										<li>
											{this.props.it.subTitle}
										</li>
									</ul>
									<p className="detail ellipsis multiline">{this.props.it.detail}</p>
								</div>
							</div>
			);
		}

}

Itinery.propTypes = {
	it: React.PropTypes.object.isRequired
};

Itinery.defaultProps = {
		it: ''
};

export {Itinery};