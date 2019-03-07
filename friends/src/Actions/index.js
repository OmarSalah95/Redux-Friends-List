import axios from 'axios'

export const FETCHING_DATA = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const fetchingData = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({type: SUCCESS, payload:res.data}))
        .catch(err => dispatch({type:FAILURE, payload: err}))
}