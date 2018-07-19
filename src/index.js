import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
/*引入路由器和路由*/
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Page01 from "./components/Page01.js";
import Page02 from "./components/Page02.js";
import Page03 from "./components/Page03.js";
import Error from "./components/error.js";
import Header from "./components/header.js";
import Nav from "./components/Nav.js"
import Clock from "./components/Clock.js"
ReactDOM.render( 
  <Router >
  <div>
	  <Nav / >
    <Switch>
	  <Route exact path = "/" component = {Page01}/> 
	  <Route path ="/Page02" component = {Page02}/>
    <Route path ="/Page03/:params/:name" component = {Page03}/>
    <Redirect from ="/redirect" to="/"/>
    <Route component = {Error}/>
    </Switch>
    <Header name ="微淘"/>
    <Clock city="深圳"/>
  </div> 

  </Router>
  ,
   document.getElementById('root')
);