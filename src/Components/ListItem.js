import React from 'react'

function ListItem (props) {
    const {deleteMovie, movie} = props
    return (
        <div className="List-Item" onDoubleClick={() => deleteMovie(movie.id)}>
            <img alt={movie.title} className="movie-poster" src={movie.posterImg}/>
            <div className="movie-info">
                <p>{movie.title}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    )
}

export default ListItem
