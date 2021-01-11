import { combineReducers } from "redux";
import { THEME_TOGGLER } from "./Action";

const themeReducer = (state = "", action) => {
    switch(action.type){
        case THEME_TOGGLER: {
            return state = action.payload
        }
        default: return state
    }
}

export default combineReducers({
    theme : themeReducer
})