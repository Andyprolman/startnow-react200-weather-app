import { combineReducers } from 'redux';
import inputReducer from './components/Input/inputReducer';


const rootReducer = combineReducers({
    input: inputReducer
});

export default rootReducer;
