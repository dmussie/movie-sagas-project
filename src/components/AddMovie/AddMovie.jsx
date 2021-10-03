import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//material UI for dropdown???

// get genre ID
function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    // genre object will aid in selecting for a specific genre ID
    const genre = {
        adventure: 1,
        animated: 2,
        biographical: 3,
        comedy: 4,
        disaster: 5,
        drama: 6,
        epic: 7,
        fantasy: 8,
        musical: 9,
        romantic: 10,
        science_fiction: 11,
        space_opera: 12,
        superhero: 13
    };

    //Initial state is an object, with title, poster(url), description, genres [dropdown]
    const [newMovie, setMovie] = useState({title: '', poster: '', decription: '', genre_id: ''});

    //handle a new title
    const handleNewTitle = (event) => {
        console.log('event happened');
        //similar to in redux -- we don't want to get rid of the id field when we update title
        setMovie({...newMovie, title: event.target.value})
    }

    const handleNewPoster = (event) => {
        console.log('event happened');
        setMovie({...newMovie, poster: event.target.value})
    }

    const handleNewDescription = (event) => {
        console.log('event happened');
        setMovie({...newMovie, description: event.target.value})
    }

    const handleNewGenre = (event) => {
        console.log('event happened');
        setMovie({...newMovie, genre: event.target.value});
    }

    // POST dispatch to post new movie to DOM
    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'POST_MOVIE', payload: newMovie })
        //updates the next movie to have a new id
        setMovie({title: '', poster: '', decription: '', genre_id: ''})
    }

    const backToHome = () => {
        history.push('/');
    }

    return (
        // select goes here after inputs
        <div>
            <h3>Add A New Movie!</h3>
            <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' placeholder="title" value={newMovie.title} onChange={handleNewTitle} />
                <input type='text' placeholder="poster" value={newMovie.poster} onChange={handleNewPoster} />
                <input type='text' placeholder="description" value={newMovie.description} onChange={handleNewDescription} />
                <select name="genres" id="genres" value={newMovie.genre_id} onChange={handleNewGenre}>
                    <option value="genre-dropdown">Pick a Genre!</option>
                    <option value={genre.adventure}>Adventure</option>
                    <option value={genre.animated}>Animated</option>
                    <option value={genre.biographical}>Biographical</option>
                    <option value={genre.comedy}>Comedy</option>
                    <option value={genre.disaster}>Disaster</option>
                    <option value={genre.drama}>Drama</option>
                    <option value={genre.epic}>Epic</option>
                    <option value={genre.fantasy}>Fantasy</option>
                    <option value={genre.musical}>Musical</option>
                    <option value={genre.romantic}>Romantic</option>
                    <option value={genre.science_fiction}>Science Fiction</option>
                    <option value={genre.space_opera}>Space-Opera</option>
                    <option value={genre.superhero}>Superhero</option>
                </select>
            </form>
            <button onClick={() => backToHome()}>Cancel</button>
        </div>
    )
}

export default AddMovie;