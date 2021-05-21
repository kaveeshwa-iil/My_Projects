import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from './components/pages/Quiz-app/Quiz';
import Home from './components/pages/Home/Home';
import Tour_Home from './components/pages/Tours-app/Tours_Home';
import Review_Home from './components/pages/Reviews/Review_Home';
import Todo_Home from './components/pages/ToDo-app/Todo_Home'

export default function App() {

	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home}/>				
				<Route path='/quiz' exact component={Quiz}/>
				<Route path='/tours' exact component={Tour_Home}/>
				<Route path='/reviews' exact component={Review_Home}/>
				<Route path='/todo' exact component={Todo_Home}/>


			</Switch>
		</Router>
	)

}
