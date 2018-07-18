import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
/*引入路由器和路由*/
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Page01 from "./components/Page01.js";
import Page02 from "./components/Page02.js";
import Nav from "./components/Nav.js"
ReactDOM.render( 
  <Router >
  <div>
	  <Nav / >
	  <Route exact path = "/" component = {Page01}/> 
	  <Route path ="/Page02" component = {Page02}/>
  </div> 
  </Router>,
   document.getElementById('root')
);