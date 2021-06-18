import React, { Component } from 'react';
import Barn from './components/Barn';
import Garden from './components/garden';
import Farmhouse from './components/Farmhouse';

export default class App extends Component {
	render() {
		return (
			<div className='container mt-3'>
				<Barn />
				<Garden />
        		<Farmhouse />
			</div>
		);
	}
}
