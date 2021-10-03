import { useSelector } from "react-redux";

function MovieDetail() {
    const movieDetail = useSelector(store => store.selectedMovie);
    const movieGenre = useSelector(store => store.selectedMovieGenre);
    console.log(movieDetail);
    return (
        <div>
            <h2>Details for {movieDetail.title}</h2>
            <img src={movieDetail.poster} alt={movieDetail.title}/>
            <p>Description: {movieDetail.description}</p>
            {/* add genre component here */}
        </div>
    )
}

export default MovieDetail;