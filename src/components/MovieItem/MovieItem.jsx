import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({movie}) {
    const dispatch = useDispatch();
    const history = useHistory();
    //const [movieSelected, setMovieSelected] = useState(false);

    const handleToDetails = () => {
        dispatch({type: 'FETCH_MOVIE_DETAILS',  payload: movie})
        history.push('/detail');
    }

    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={ handleToDetails } src={movie.poster} alt={movie.title}/>
            <p onChange={handleToDetails}></p>
        </div>
        <div>
        {/* {
            movieSelected ? (
                <p onClick={() => setMovieSelected(false)} key={movieId}></p>
            ) : (
                <p onClick={() => setMovieSelected(true)} key={movieId}></p> 
            )
        } */}
        
        </div>
        </>
    )
}

export default MovieItem;