import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import Button from '@material-ui/core/Button';
import './MovieList.css'

function MovieList() {
    // we are creating a dispatch variable to enable a dispatch of an action type
    const dispatch = useDispatch();
    // we are creating a movies variable to enable 
    // the retrieval of data from our redux store
    const movies = useSelector(store => store.movies);
    
    const history = useHistory();
    
    // this useEffect function will enable the dispatch to occur on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); 
    }, []);

    const handleToAddMovie = () => {
        history.push('/addmovie')
    }

    // in this return, we render the mapping of our movie data from the redux store
    // this data is then appended to the DOM once its data is passed down via props in the MovieItem component
    return (
        <main>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleToAddMovie}>
                Add a Movie!
            </Button>
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