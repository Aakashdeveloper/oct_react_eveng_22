import {combineReducers} from 'redux';
import films from './movieReducer';

//declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;