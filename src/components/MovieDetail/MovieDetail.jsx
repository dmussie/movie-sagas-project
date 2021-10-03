import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function MovieDetail() {
    const movieDetail = useSelector(store => store.selectedMovie);
    const movieGenre = useSelector(store => store.selectedMovieGenre);
    const history = useHistory();

    const handleToHome = () => {
        history.push('/');
    }

    return (
        <>
        <div>
            <h2>Details for {movieDetail.title}</h2>
            <img src={movieDetail.poster} alt={movieDetail.title}/>
            <p>Description: {movieDetail.description}</p>
            <section className="genres">
                <h3>Genres</h3>
                {movieGenre.map(genre => {
                    return (
                       
                        <p key={genre.id}>{genre.name}</p>
                       
                    );
                })}
                <button onClick={handleToHome}>Back To List</button>
            </section>
        </div>
        </>
    )
}

export default MovieDetail;