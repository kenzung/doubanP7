import { FETCH_MOVIES_ERROR } from './types';

export const receiveMovies = (fetchMovieType, movies) => (
    {
        type: fetchMovieType,
        payload: movies,
    }
);

export const fetchMovieError = (fetchMovieType, err) => (
    {
        type: FETCH_MOVIES_ERROR,
        payload: err,
        fetchMovieType,
    }
);

export const fetchMovie = (method, fetchMovieType) => (dispatch) => {
    method
    .then(res => res.json())
    .then(json => {
        dispatch(receiveMovies(fetchMovieType, json.subjects));
    })
    .catch(err => {
        dispatch(fetchMovieError(fetchMovieType, err));
    });
};