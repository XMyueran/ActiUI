import React, { Component }from 'react'
import Marquee from '../Marquee'

class UseMarquee extends Component {

	constructor(props) {
		super(props)
        this.state ={
			prize: -1,
			startGame: false
        }
	}
	handleMarqueeStart() {
		//获取用户数据，开始游戏，改变 prize 值
		this.setState({
			startGame: true,
			prize: 6
		})
		
	}
	handleMarqueeResult() {
		//结束游戏，弹框提示获奖
		alert('恭喜你获得奖励'+this.state.prize)
	}
	render() {
		return (
			<Marquee 
				isStart={this.state.startGame}
				prize={this.state.prize}
				handleStart={() => this.handleMarqueeStart()}
				handleResult={() => this.handleMarqueeResult()}
			/>
		)
	}
}


export default UseMarquee