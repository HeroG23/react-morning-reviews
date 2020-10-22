import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from "../data/movies.json"
import Form from "./Form"

class List extends Component{
    constructor(){
        super()
        this.state = {
            movies: movies
        }
    }

    render(){
    let moviesMap = this.state.movies.map(elem => { 
        return <ListItem key={elem.id} movie={elem}/>
    })
        return(
            <div className="List">
                <Form/>
                {moviesMap}
            </div>
        )
    }
}

export default List