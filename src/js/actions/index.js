import * as types from '../constants';

export function getUserData() {
	return {
		type: types.GET_USER_DATA
	};
}
export function getUserDataAttempt() {
	return {
		type: types.GET_USER_DATA_ATTEMPT
	};
}

export function getUserDataSuccess(data) {
	return {
		type: types.GET_USER_DATA_SUCCESS,
		data
	};
}

export function getUserDataFail(error) {
	return {
		type: types.GET_USER_DATA_FAIL,
		error
	};
}
