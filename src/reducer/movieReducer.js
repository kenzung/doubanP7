import { 
    FETCH_THEATERS_MOVIES, 
    FETCH_COMINGSOON_MOVIES, 
    FETCH_TOP_MOVIES,
    FETCH_MOVIES_ERROR
 } from '../action/types';

const initialState = {
    theatersMovies: [],
    commingMovies: [],
    topMovies: [],
    fetchTheatersMovieErr: null,
    fetchCommingSoonMovieErr: null,
    fetchTopMovieErr: null,
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_THEATERS_MOVIES: {
            return {
                ...state,
                fetchTheatersMovieErr: null,
                theatersMovies: action.payload,
            };
        }
        case FETCH_COMINGSOON_MOVIES: {
            return {
                ...state,
                fetchCommingSoonMovieErr: null,
                commingMovies: action.payload,
            };
        }
        case FETCH_TOP_MOVIES: {
            return {
                ...state,
                fetchTopMovieErr: null,
                topMovies: action.payload,
            };
        } 
        case FETCH_MOVIES_ERROR: {
            let type;
            switch (action.fetchMovieType) {
                case FETCH_THEATERS_MOVIES: {
                    type = 'fetchTheatersMovieErr';
                    break;
                }
                case FETCH_COMINGSOON_MOVIES: {
                    type = 'fetchCommingSoonMovieErr';
                    break;
                }
                case FETCH_TOP_MOVIES: {
                    type = 'fetchTopMovieErr';
                    break;
                }
                default: {
                    break;
                }
            }
            if (!type) {
                return state;
            }
            return {
                ...state,
                [`${type}`]: action.payload
            }
        }
        default: {
            return state;
        }
    }
};