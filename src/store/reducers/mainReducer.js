import {FETCH_MAIN_FAILURE, FETCH_MAIN_REQUEST, FETCH_MAIN_SUCCESS} from "../actions/mainActions";

const initialState = {
    mainDataLoading: false,
    mainData: null,
    mainDataError: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MAIN_REQUEST:
            return {...state, mainDataLoading: true};
        case FETCH_MAIN_SUCCESS:
            return {...state, mainDataLoading: false, mainDataError: null, mainData: action.data};
        case FETCH_MAIN_FAILURE:
            return {...state, mainDataError: action.error, mainDataLoading: false};
        default:
            return state;
    }
};

export default usersReducer;