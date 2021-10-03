import { useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';

function GenreItem({genre}) {
    const dispatch = useDispatch();
    //const history = useHistory();

    const handleGenreDispatch = () => {
        dispatch({type: 'FETCH_MOVIE_GENRES', payload: genre});
    }

    return (
        <div key={genre.id} onChange={handleGenreDispatch}>
            <h3>{genre.name}</h3>
        </div>
    )
}

export default GenreItem;