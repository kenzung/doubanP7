import { 
    FETCHING_ACTIVITIES,
    RECEIVE_ACTIVITIES,  
    CHANGE_ACTIVITIES_HASMORE,
    FETCH_ACTIVITIES_ERROR } from '../action/types';

const initialState = {
    activities: [],
    isFetching: false,
    hasMore: true,
    fetchActiviesErr: null,
};

export const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ACTIVITIES: {
            return {
                ...state,
                fetchActiviesErr: null,
                isFetching: true,
            };
        }
        case RECEIVE_ACTIVITIES: {
            return {
                ...state,
                fetchActiviesErr: null,
                isFetching: false,
                activities: [
                    ...state.activities,
                    ...action.payload
                ]
            }
        }
        case CHANGE_ACTIVITIES_HASMORE: {
            return {
                ...state,
                hasMore: state.activities.length <= action.total && action.receivedAcitivies.length > 0,
            }
        }
        case FETCH_ACTIVITIES_ERROR: {
            return {
                ...state,
                isFetching: false,
                fetchActiviesErr: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};