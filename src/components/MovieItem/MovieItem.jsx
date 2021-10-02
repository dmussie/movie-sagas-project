import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({movie}) {
    const movieId = movie.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [movieSelected, setMovieSelected] = useState(false);

    const handleToDetails = () => {
        history.push('/detail');
    }

    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={ handleToDetails } src={movie.poster} alt={movie.title}/>
            <h4>{movie.description}</h4>
            <p onChange={handleToDetails}></p>
        </div>
        <div>
        {
            movieSelected ? (
                <p onClick={() => setMovieSelected(false)} key={movieId}></p>
            ) : (
                <p onClick={() => setMovieSelected(true)} key={movieId}></p> 
            )
        }
        
        </div>
        </>
    )
}

export default MovieItem;