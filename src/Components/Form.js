import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state={
            title: '',
            year: '',
            posterImg: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e){
        const {title, year, posterImg} = this.state
        e.preventDefault();
        this.props.addMovie(title, year, posterImg)
    }

    render() {
        return (
            <form className="Form" onSubmit={this.handleAdd}>
                <input 
                    name="title" 
                    placeholder="Title"
                    onChange={e => this.handleChange(e)}
                />

                <input 
                    name="year" 
                    placeholder="Year"
                    onChange={e => this.handleChange(e)}
                />

                <input 
                    name="posterImg" 
                    placeholder="Poster URL"
                    onChange={e => this.handleChange(e)}
                />
                <button type="submit" >Add Movies</button>
            </form>
        )
    }
}

export default Form
