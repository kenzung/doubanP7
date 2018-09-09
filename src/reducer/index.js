import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { activityReducer } from './activityReducer';

export default combineReducers({
    movie: movieReducer,
    activity: activityReducer
});