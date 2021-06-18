import React, { Component } from 'react'

export default class Barn extends Component {

    render() {
        const animals = [
            {
                type: "horse",
                name: "Jeffrey"
            },
            {
                type: "goat",
                name: "Natalie"
            }
        ];      

        return (
            <div className="row my-3">
                <div className="col-12">
                    <h3>Barn</h3>
                </div>
                { this.renderAnimalList(animals) }
            </div>
        )
    }

    renderAnimalList(animals) {
        if (animals.length === 0) 
            return <div className="col">There are no animals in the barn.</div>;
        return animals.map(animal => <div className="col">{animal.name} - {animal.type}</div> );
    }
}
