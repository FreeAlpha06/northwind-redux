import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getCategoryReducer(state = initialState.categories, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
            break;
        default:
            return state;
    }
}