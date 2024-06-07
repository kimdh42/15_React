import menuReducer from './MenuModules';
import { combineReducers } from 'redux';
import reviewReducer from './ReviewModules'


const rootReducer = combineReducers({
    menuReducer,reviewReducer
});

export default rootReducer;