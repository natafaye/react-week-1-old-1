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
        ]
        return (
            <div>
                This is a barn.
            </div>
        )
    }
}
