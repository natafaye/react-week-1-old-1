import React, { Component } from 'react'

export default class Farmhouse extends Component {

    render() {
        const mudRoom = [{
                type: "sink",
                name: "Utility Sink"
            },
            {
                type: "toilet",
                name: "Super max flusher"
            }
        ];

        return ( 
            <div className = "row my-5" >
                <div className = "col-12" >
                    <h3 > Farmhouse </h3>
                </div>
                { this.renderFarmhouseList(mudRoom) }
            </div>
        )
    }

    renderFarmhouseList(mudRoom) {
        if (mudRoom.length === 0)
            return <div className = "col" > The mud room smells like pigs. </div>;
        return mudRoom.map(mudRoom => <div className = "col" > { mudRoom.name } - { mudRoom.type } </div> );
    }
}