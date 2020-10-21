import React from 'react' // -for functional components //{Component} from 'react'; - for class components
import './App.css';
import List from './Components/List'

// class App extends Component {
//    constructor(){
//        super()
//        this.state={

//        }
//    }

//    render(){
//        return(
//            <div className = "App">
//                <h1 className = "movie-list-title">The Most Amazing Movie List.</h1>
//            </div>
//        )
//    }
// }

function App(){
    return(
        <div className = "App">
            <h1 className = "movie-list-title">The Most Amazing Movie List.</h1>
            <List/>
        </div>
    )
}

export default App

