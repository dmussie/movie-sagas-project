import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// get genre ID
function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    const defaultMovie = {title: '', poster: '', description: '', genre_id: ''}
    //Initial state is an object, with title, poster(url), description, genre_id [dropdown]
    let [newMovie, setMovie] = useState(defaultMovie);

    //This handler function enables a user's dropdown selection to be saved 
    //once a movie is posted to the database
    const handleNewGenre = (event) => {
        console.log('event happened');
        setMovie({...newMovie, genre_id: event.target.value});
    }

    // POST dispatch to post new movie to DOM
    // Once this function is called via click action
    // The post movie payload is dispatched to the saga prior to the server
    // User inputs will populate the default empty strings for each category
    // Finally, the user will be sent to the home screen
    const addNewMovie = (event) => {
        console.log(event);
        event.preventDefault();
        dispatch({ type: 'POST_MOVIE', payload: newMovie })
        //updates the next movie to have a new id
        setMovie({title: '', poster: '', decription: '', genre_id: ''})
        history.push('/');
    }

    // This enables a user to be sent back to the 
    // home screen when the Cancel button is clicked
    const backToHome = () => {
        history.push('/');
    }

    // this return will render all of the inputs and click actions on this Add Page
    // addNewMovie is called onSubmit, so when the save button is clicked,
    // user data is sent out to be saved to the database, and sent back to the user
    // as a new movie on the DOM on the movie list page
    return (
        // select goes here after inputs
        <div>
            <h3>Add A New Movie!</h3>
            <form onSubmit={addNewMovie}>
                <input type='text' placeholder="title" 
                value={newMovie.title} 
                onChange={(event) => setMovie({...newMovie, title: event.target.value})} />
                <input type='text' placeholder="poster" 
                value={newMovie.poster} 
                onChange={(event) => setMovie({...newMovie, poster: event.target.value})} />
                <input type='text' placeholder="description" 
                value={newMovie.description} 
                onChange={(event) => setMovie({...newMovie, description: event.target.value})} />
                <select name="genres" id="genres" value={newMovie.genre_id} 
                onChange={handleNewGenre}>
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
                <button type="submit">Save</button>
                <button onClick={() => backToHome()}>Cancel</button>
            </form>
            
        </div>
    )
}

export default AddMovie;