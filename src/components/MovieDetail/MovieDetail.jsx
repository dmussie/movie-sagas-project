import { useSelector } from "react-redux";

function MovieDetail() {
    const movieDetail = useSelector(store => store.selectedMovie);
    console.log(movieDetail);
    return (
        <div>
            <h2>Details for {movieDetail.title}</h2>
            <div>{JSON.stringify(movieDetail.description)}</div>
        </div>
    )
}

export default MovieDetail;