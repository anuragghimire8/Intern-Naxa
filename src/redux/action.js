
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchRequest = () => ({
    type: FETCH_REQUEST,
});

export const fetchSuccess = (services) => ({
    type: FETCH_SUCCESS,
    payload: services,
});

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    payload: error,
});
