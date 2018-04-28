import * as types from '../constants';

const initial = {
	isLoading: false,
	error: null,
	data: []
};

export default function getDataReducer(state = initial, action) {
	switch (action.type) {
		case types.GET_USER_DATA_ATTEMPT:
			return { ...state, isLoading: true };
		case types.GET_USER_DATA_SUCCESS:
			return { ...state, data: action.data };
		case types.GET_USER_DATA_FAIL:
			return { ...state, error: action.error };
		default:
			return state;
	}
}
