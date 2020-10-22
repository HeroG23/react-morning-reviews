import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state={
            title: '',
            year: '',
            posterImg: ''
        }
        
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="Form">
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
                <button type="submit">Add Movies</button>
            </form>
        )
    }
}

export default Form
