/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-19 20:04:30
 * @version $Id$
 */
import React from 'react';

export default class Header extends React.Component{
	render(){
		return <div>这里是头部: {this.props.name}</div>
	}
}
