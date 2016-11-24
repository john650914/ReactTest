require('../sass/main.sass');
require("font-awesome-sass-loader");


import React from 'react';

/*

								hot: [
										{ "imgUrl": "img/hot1.jpg",
											"title": "走入迷幻森林！新竹馬武督部落一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊" ,
											"subTitle": ["台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物", "台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物" ],
											"auther": "Tripitta特約編輯／Doris",
											"autherUrl": "img/head.jpg",
											"date": "2016/6/22-2016/6/22",
											"love": "1,200",
											"noted": "9,9999999999999999999999999999999999999999999999999999999999999999999999999999999999",
											"days": "2",
											"detail": "日本對中國人來說，既熟悉又陌生。在日本的語言文字和文化藝術上，總能看見一些中國的影子。然而在審美和生活習慣上，又有那麼多的不同。我甚至都不知道"
										},
										{ "imgUrl": "img/hot2.jpg",
											"title": "走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊" ,
											"subTitle": ["台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物", "台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物" ],
											"auther": "Tripitta特約編輯／Doris",
											"autherUrl": "img/head.jpg",
											"date": "2016/6/22-2016/6/22",
											"love": "1,200",
											"noted": "9,9999999999999999999999999999999999999999999999999999999999999999999999999999999999",
											"days": "4",
											"detail": "日本對中國人來說，既熟悉又陌生。在日本的語言文字和文化藝術上，總能看見一些中國的影子。然而在審美和生活習慣上，又有那麼多的不同。我甚至都不知道"
										},
										{ "imgUrl": "img/hot3.jpg",
											"title": "走入太平山森林！宜蘭太平山部落一日遊苗栗飛牛牧場一日遊" ,
											"subTitle": ["台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物", "台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物" ],
											"auther": "Tripitta特約編輯／DorisTripitta特約編輯／DorisTripitta特約編輯／DorisTripitta特約編輯／DorisTripitta特約編輯／DorisTripitta特約編輯／Doris",
											"autherUrl": "img/head.jpg",
											"date": "2016/6/22-2016/6/22",
											"love": "1,200",
											"noted": "9,999",
											"days": "5",
											"detail": "日本對中國人來說，既熟悉又陌生。在日本的語言文字和文化藝術上，總能看見一些中國的影子。然而在審美和生活習慣上，又有那麼多的不同。我甚至都不知道"
										}
									]

 */

class App extends React.Component{
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			this.setState({
				hot:
							{ "imgUrl": "img/hot1.jpg",
								"title": "走入迷幻森林！新竹馬武督部落一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊走入陽光牧場！苗栗飛牛牧場一日遊苗栗飛牛牧場一日遊" ,
								"subTitle": ["台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物", "台北101觀景台", "四南村眷村文物館", "小凱悅南村小吃店", "四南村眷村文物館", "四南村眷村物" ],
								"auther": "Tripitta特約編輯／Doris",
								"autherUrl": "img/head.jpg",
								"date": "2016/6/22-2016/6/22",
								"love": "1,200",
								"noted": "9,9999999999999999999999999999999999999999999999999999999999999999999999999999999999",
								"days": "2",
								"detail": "日本對中國人來說，既熟悉又陌生。在日本的語言文字和文化藝術上，總能看見一些中國的影子。然而在審美和生活習慣上，又有那麼多的不同。我甚至都不知道"
							}
			});
			console.log(this.state.hot);
		}

		render(){
			return (
				<div className="hot">
					<div className="wrap">
						<h2>熱門瀏覽<span className="more">更多熱門瀏覽</span></h2>

						<div className="itineryGroup">
							<div className="itinery">
								<div className="place" style={ {backgroundImage: 'url(' + this.state.hot.imgUrl + ')'} }>
									<div className="days">
										<span className="bigDay">{this.state.hot.days}</span> Day
									</div>
								</div>
								<div className="content">
									<h5 className="auther">
									<span className="head" style={{ backgroundImage: 'url(' + this.state.hot.autherUrl + ')' }} alt=""></span>{this.state.hot.auther}</h5>
									<h2 className="title">{this.state.hot.title}</h2>
									<ul className="note">
										<li className="date">{this.state.hot.date}</li>
										<li className="love">{this.state.hot.love}</li>
										<li className="noted">{this.state.hot.noted}</li>
									</ul>

									<ul className="subTitle ellipsis multiline">
										<li>
											{this.state.hot.subTitle}
										</li>
									</ul>
									<p className="detail ellipsis multiline">{this.state.hot.detail}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
}


export {App};