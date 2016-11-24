require('../sass/main.sass');
require("font-awesome-sass-loader");


import React from 'react';
import {Itinery} from './itinery';
import axios from 'axios';

class ItineryGroup extends React.Component{
		constructor(props) {
			super(props);
			this.state = {
				hot:[]
			};
		}

		componentDidMount() {
			axios({
				method: 'get',
				url: '/json/hot.json',
				dataType: 'JSON'
			})
			.then( (response) => {
				this.setState({
					hot: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});;

			//console.log(this.state.hot);
		}

		render(){
			return (
				<div className="hot">
					<div className="wrap">
						<h2>熱門瀏覽<span className="more">更多熱門瀏覽</span></h2>

						<div className="itineryGroup">
							{ this.state.hot.map((object, i) => {
									return (
										<Itinery it={object}  key={i}/>
									);
									//console.log(object);
								})
							}
						</div>
					</div>
				</div>
			);
		}
}


export {ItineryGroup};