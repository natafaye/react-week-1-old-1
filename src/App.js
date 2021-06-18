import React, { Component } from 'react';
import Barn from './components/Barn';
import Garden from './components/garden';

export default class App extends Component {
	render() {
		return (
			<div className='container mt-3'>
				<Barn />
				<Garden />
			</div>
		);
	}
}
