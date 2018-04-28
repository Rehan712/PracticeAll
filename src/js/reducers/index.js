import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';

const rootReducer = combineReducers({
	data: getDataReducer
});

export default rootReducer;
