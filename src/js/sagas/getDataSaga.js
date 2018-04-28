import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* getDataSaga() {
	yield put(actions.getUserDataAttempt());
	//yield call(delay, 1000);
	try {
		const response = yield call(api.data);
		yield put(actions.getUserDataSuccess(response));
	} catch (e) {
		yield put(actions.getUserDataFail({ messaga: 'Api Failure' }));
	}
}
