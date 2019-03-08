import { FETCHING_DATA, FETCHING_SUCCESS, FETCHING_FAILURE, LOGIN_SUCCESS, FAILURE_LOGIN} from "../Actions";

const initialState = {
    friends: [],
    fetchingFriends: false,
    loggedIn: false,
    error: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return{
                ...state,
                fetchingFriends: true
            }
        case FETCHING_SUCCESS: 
            return{
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case LOGIN_SUCCESS:
                return{
                    ...state,
                    loggedIn: true
                }
        case FAILURE_LOGIN:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
        default:
            return state;
    }
  };
  
  export default rootReducer;
  