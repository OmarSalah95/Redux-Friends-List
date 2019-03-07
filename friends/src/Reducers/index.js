import { FETCHING_DATA, SUCCESS, FAILURE} from "../Actions";

const initialState = {
    friends: [],
    fetchingFriends: false,
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return{
                ...state,
                fetchingFriends: true
            }
        case SUCCESS: 
            return{
                ...state,
                fetching: false,
                friends: action.payload
            }
        case FAILURE:
        console.log(action.payload);
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        default:
            return state;
    }
  };
  
  export default reducer;
  