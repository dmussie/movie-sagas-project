import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {
    // we are creating a dispatch variable to enable a dispatch of an action type
    const dispatch = useDispatch();
    // we are creating a movies variable to enable 
    // the retrieval of data from our redux store
    const movies = useSelector(store => store.movies);
    
    // this useEffect function will enable the dispatch to occur on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); 
    }, []);

    // in this return, we render the mapping of our movie data from the redux store
    // this data is then appended to the DOM once its data is passed down via props in the MovieItem component
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                       <MovieItem key={movie.id}
                       movie={movie} /> 
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;