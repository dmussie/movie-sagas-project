import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//material UI for dropdown???

// get genre ID
function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    const defaultMovie = {title: '', poster: '', description: '', genre_id: ''}
    //Initial state is an object, with title, poster(url), description, genres [dropdown]
    let [newMovie, setMovie] = useState(defaultMovie);

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
        setMovie({...newMovie, genre_id: event.target.value});
    }

    // POST dispatch to post new movie to DOM
    const addNewMovie = (event) => {
        console.log(event);
        event.preventDefault();
        dispatch({ type: 'POST_MOVIE', payload: newMovie })
        //updates the next movie to have a new id
        setMovie({title: '', poster: '', decription: '', genre_id: ''})
        history.push('/');
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
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <button onClick={() => addNewMovie(event)}>Save</button>
                <button onClick={() => backToHome()}>Cancel</button>
            </form>
            
        </div>
    )
}

export default AddMovie;