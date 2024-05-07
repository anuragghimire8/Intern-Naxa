// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchSuccess,
    fetchFailure,
    FETCH_REQUEST,
} from './action';
import { fetchDataFromAPI } from './api';

function* fetchServicesSaga() {
    try {
        const services = yield call(fetchDataFromAPI); // Call the API function
        yield put(fetchSuccess(services)); // Dispatch success action with fetched services
    } catch (error) {
        yield put(fetchFailure(error.message)); // Dispatch failure action with error message
    }
}

function* rootSaga() {
    yield takeLatest(FETCH_REQUEST, fetchServicesSaga);
}

export default rootSaga;
