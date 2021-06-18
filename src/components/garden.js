import React, { Component } from 'react';

export default class Garden extends Component {
	render() {
		const vegetables = [
			{
				name: 'carrot',
				count: 12,
			},
			{
				name: 'radish',
				count: 3,
			},
			{
				name: 'corn',
				count: 15,
			},
		];

		return (
			<div className='row my-3'>
				<div className='col-12'>
					<h3>Garden</h3>
                {(vegetables.length === 0) && <div className='col'>You need to plant your garden.</div>} 
                {vegetables.map(vegetable => <div className="col"> {vegetable.name}, {vegetable.count} </div>)}
				</div>
			</div>
		);
	}
}
