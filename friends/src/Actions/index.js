import axios from 'axios'

export const FETCHING_DATA = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FAILURE'

export const getData = () => dispatch => {
    console.log('action fired');
    dispatch({ type: FETCHING_DATA })
    axios
        .get('http://localhost:5000/api/friends', 
            {headers:{ Authorization: localStorage.getItem('token') }}
        )
        .then(res => dispatch({type: FETCHING_SUCCESS, payload:res.data}))
        .catch(err => dispatch({type: FETCHING_FAILURE, payload: err}))
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAILURE_LOGIN = 'FAILURE_LOGIN'

export const login = creds => dispatch => {
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS})
        })
        .catch(err => dispatch({type:FAILURE_LOGIN, payload: err}))
};