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

    // POST dispatch to post new movie to DOM
    return (
        // select goes here after inputs
    )
}

export default AddMovie;