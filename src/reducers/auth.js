import { AUTHENTICATED, NOT_AUTHENTICATED } from '../actions/index.js';


export const initialState = {
    authChecked: false,
    loggedIn: false,
    current_user: []
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: true,
                current_user: action.payload
            }
        case NOT_AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: false,
                current_user: []
            }
        default:
            return state;
    }    
}