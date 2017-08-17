import {combineReducers} from "redux";

import basic from './BasicReducer';

const appReducer = combineReducers({
    basic
});

const rootReducer = (state, action) => {
    if(action.type === 'ERASE_DATA') {
        console.log("Erasing all data");
        state = undefined;
    }
    return appReducer(state,action);
}

export default rootReducer;