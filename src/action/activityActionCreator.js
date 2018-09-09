import { getArticles } from '../network/article';
import { 
    RECEIVE_ACTIVITIES, 
    CHANGE_ACTIVITIES_HASMORE,
    FETCH_ACTIVITIES_ERROR
 } from './types';

export const receiveAcitivies = (activities) => {
    return {
        type: RECEIVE_ACTIVITIES,
        payload: activities,
    };
};

export const checkHasMore = (total, receivedAcitivies) => {
    return {
        type: CHANGE_ACTIVITIES_HASMORE,
        total,
        receivedAcitivies,
    };
};

export const fetchActivitiesError = (err) => {
    return {
        type: FETCH_ACTIVITIES_ERROR,
        payload: err,
    }
};

export const fetchActivities = (page = 0) => (dispatch) => {
    getArticles(page)
    .then(res => res.json())
    .then(json => {
        const receivedAcitivies = json.events;
        dispatch(receiveAcitivies(receivedAcitivies));
        dispatch(checkHasMore(json.total, receivedAcitivies));
    })
    .catch(err => {
        dispatch(fetchActivitiesError(fetchActivitiesError(err)));
    });
};