import React, { Component } from 'react'

class List extends Component{
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    render(){
        return(
            <div><h1>List Component</h1></div>
        )
    }
}

export default List