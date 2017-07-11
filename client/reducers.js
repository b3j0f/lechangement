/**
* Root Reducer
*/
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/reducer';
import solution from './modules/Solution/reducer';

// Combine all reducers into one root reducer
export default combineReducers({
    app,
    solution
});
