import axiosApi from "../../axiosApi";

export const FETCH_MAIN_REQUEST = 'FETCH_MAIN_REQUEST';
export const FETCH_MAIN_SUCCESS = 'FETCH_MAIN_SUCCESS';
export const FETCH_MAIN_FAILURE = 'FETCH_MAIN_FAILURE';

export const fetchMainRequest = () => ({type: FETCH_MAIN_REQUEST});
export const fetchMainSuccess = data => ({type: FETCH_MAIN_SUCCESS, data});
export const fetchMainFailure = error => ({type: FETCH_MAIN_FAILURE, error});

export const fetchMain = () => {
    return async dispatch => {
        try {
            dispatch(fetchMainRequest());
            const response = await axiosApi.get('');
            dispatch(fetchMainSuccess(response.data));
        } catch (error) {
            if (error.response) {
                dispatch(fetchMainFailure(error.response.data));
            } else {
                dispatch(fetchMainFailure({global: 'Network error or no internet'}));
            }
        }
    }
};