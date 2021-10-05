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
    // GET action, fetchAllMovies
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    // GET action, fetchMovieDetails
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    // GET action, fetchMovieGenres
    yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
    // POST action, postMovies
    yield takeEvery('POST_MOVIE', postMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    // we then 'put' this data in our movies reducer for temporary storage
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* postMovie(action) {
    // this saga handles posting user inputs to the server
    // which is then saved to our database
    try{
        console.log('Sagas postMovie works!');
        console.log(action.payload);
        const forTheDatabase = action.payload;
        //POST new movies
        yield axios.post('/api/movie', forTheDatabase);
        const actionForFetch = {type: 'FETCH_MOVIES'};
        //trigger saga
        yield put(actionForFetch);
    } catch (error) {
        console.error('ERROR', error);
    }
}

// create a fetchMovieDetails saga to select for specific movie details from the server
// we are able to do this from movie id's
// this data is then sent to the selectedMovie reducer for temporary storage
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
// movie id's are again integral for selecting the movie genre detail
// a separate saga for this attribute enabled me to map and select for specific genres 
// in the MovieDetail component
function* fetchMovieGenres(action) {
    try {
        const movie = action.payload;
        console.log(movie);
        const movieGenres = yield axios.get(`/api/genre/details/${movie.id}`)
        yield put({type: 'SET_MOVIE_GENRE', payload: movieGenres.data})
    } catch (error) {
        console.error('ERROR in fetchMovieGenres', error);
        alert('unable to get movie genres');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to temporarily store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// used to collect returned movie data within a object to be later selected by id
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

// fetchMovieGenres data is temporarily stored in this reducer 
const selectedMovieGenre = (state = [], action) => {
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
