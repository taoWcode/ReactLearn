/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-19 19:21:43
 * @version $Id$
 */
import React from 'react';
import Clock from "./Clock.js";

export default class Component1 extends React.Component{
	componentWillMount(){
		console.log(this.props);
	}
	render(){
		return (<div>
				"props的name为：{this.props.match.params.params}{this.props.match.params.name}"
				<Clock city="深圳"/>
			</div>)
	}

}

