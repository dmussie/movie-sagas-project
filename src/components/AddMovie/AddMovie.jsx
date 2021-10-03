import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//material UI for dropdown???

// get genre ID
function AddMovie() {
    const dispatch = useDispatch();

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
    const [newMovie, setMovie] = ({title: '', poster: '', decription: '', genre_id: ''});

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

    return (
        // select goes here after inputs
        <div>
            <h3>Add A New Movie!</h3>
            <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' placeholder="title" value={newMovie.title} onChange={handleNewTitle} />
                <input type='text' placeholder="poster" value={newMovie.poster} onChange={handleNewPoster} />
                <input type='text' placeholder="description" value={newMovie.decription} onChange={handleNewDescription} />
                <input type='text' placeholder="genre" value={newMovie.genre_id} onChange={handleNewGenre} />
                <select name="genres" id="genres">
                    <option value="adventure">{genre.adventure}</option>
                    <option value="animated">{genre.animated}</option>
                    <option value="biographical">{genre.biographical}</option>
                    <option value="comedy">{genre.comedy}</option>
                    <option value="disaster">{genre.disaster}</option>
                    <option value="drama">{genre.drama}</option>
                    <option value="epic">{genre.epic}</option>
                    <option value="fantasy">{genre.fantasy}</option>
                    <option value="musical">{genre.musical}</option>
                    <option value="romantic">{genre.romantic}</option>
                    <option value="science fiction">{genre.science_fiction}</option>
                    <option value="space-opera">{genre.space_opera}</option>
                    <option value="superhero">{genre.superhero}</option>
                </select>
            </form>
        </div>
    )
}

export default AddMovie;