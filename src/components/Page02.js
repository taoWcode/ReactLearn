/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 20:31:05
 * @version $Id$
 */
import React from 'react';
export default class Page02 extends React.Component{
	render(){
		return (<div>
					<h3>这是JSX语法部分</h3>
					<p>jsx语法中不能使用"if else语句"</p>
					<p>{1 ? 'True!' : 'False'}</p>
					<p style={myStyle}>React推荐使用内联样式</p>
				{/*注释要写在花括号里面*/}
					<p>JSX允许在模板中插入数组，数组会自动循环所有成员</p>
					<a>{arr}</a>
				</div>)
	}
}
const myStyle = {
	fontSize:100,
	color:'#ff0000'
}
const arr = ["1","2","3","4"];