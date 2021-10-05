import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// This function handles displaying all details on the DOM when the user clicks 
// a movie poster on the home page
function MovieDetail() {
    // Two useSelector functions are needed
    // movieDetails will present title, poster, and a description
    // movieGenre needed to be created as we had to collect genre information from
    // a separate junction data table with both genre and movie id's 
    // and needed to be mapped over to collect the information needed
    // there can be multiple genres for one movie so that needed to be accounted for
    const movieDetail = useSelector(store => store.selectedMovie);
    const movieGenre = useSelector(store => store.selectedMovieGenre);
    const history = useHistory();
    
    //sends a user back the home page when called
    const handleToHome = () => {
        history.push('/');
    }

    // this return renders appending all movie details to the DOM
    // .map was needed to map through an array of genre id's from our genres table
    // which then enabled us to then present the appropriate genres for each movie
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