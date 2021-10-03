import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// create a fetchMovieDetails saga to select for movie descriptions from the server
function* fetchMovieDetails(action) {
    try {
        const movie = action.payload;
        console.log(movie);
        const movieDetails = yield axios.get(`/api/movie/details/${movie.id}`);
        yield put({type: 'SET_MOVIE_DETAIL', payload: movieDetails.data})
    } catch (error) {
        console.error('ERROR in fetchMovieDetails', error);
        alert('unable to get movie details');
    }
}

// create a fetchMovieGenres saga to select for movie genres from the server
function* fetchMovieGenres(action) {
    try {
        const genre = action.payload;
        console.log(genre);
        const movieGenres = yield axios.get(`/api/genre/${genre.id}`)
        yield put({type: 'SET_MOVIE_GENRE', payload: movieGenres.data})
    } catch (error) {
        console.error('ERROR in fetchMovieGenres', error);
        alert('unable to get movie genres');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// used to collect returned movie data within a object to later select by id
const selectedMovie = (state = {}, action) => {
    switch(action.type) {
        case 'SET_MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// this reducer enables us to select for a movie genre's id??  
const selectedMovieGenre = (state = {}, action) => {
    switch(action.type) {
        case 'SET_MOVIE_GENRE':
            return action.payload;
        default:
            return state;
    }
} 

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        selectedMovie,
        genres,
        selectedMovieGenre
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
