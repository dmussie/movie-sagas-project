import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MovieItem was created as a sub component to MovieList to pass data down via props 
// and ease the process of appending movie data to the DOM
function MovieItem({movie}) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // we are calling two dispatch events
    // movie genres needed its own dispatch event as genres are pulled from a separate table in our database
    // with the possibility of a 1 - M relationship where 1 movie can have mulitple genres to collect
    // once function is called, we are navigated to the movie details page
    const handleToDetails = () => {
        dispatch({type: 'FETCH_MOVIE_DETAILS',  payload: movie})
        dispatch({type: 'FETCH_MOVIE_GENRES', payload: movie})
        history.push('/detail');
    }

    // this return renders the passing of the movie prop, movie title is presented to the DOM as well as its poster
    // once a poster is clicked, the user is taken to the details page where they can see all movie details
    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={ handleToDetails } src={movie.poster} alt={movie.title}/>
            <p onChange={handleToDetails}></p>
        </div>
        </>
    )
}

export default MovieItem;