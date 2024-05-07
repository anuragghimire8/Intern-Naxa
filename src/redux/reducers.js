// reducer.js
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './action';

const initialState = {
    services: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                services: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
