import { takeLatest, all, fork } from 'redux-saga/effects';
import * as types from '../constants';
import getDataSaga from './getDataSaga';

function* watchGetDataSaga() {
	yield takeLatest(types.GET_USER_DATA, getDataSaga);
}

export default function* rootSaga() {
	yield all([fork(watchGetDataSaga)]);
}
