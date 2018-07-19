/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-19 20:10:43
 * @version $Id$
 */
import React from 'react';

export default class Clock extends React.Component{
	constructor(props){
		super(props);
		this.states = {date:new Date().toString()};
	}
	render(){
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>{this.props.city}：现在是{this.states.date}</h2>
			</div>
			)
	}
}

