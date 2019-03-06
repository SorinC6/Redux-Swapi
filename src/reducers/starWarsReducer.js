import {FETCH_CHAR_START,FETCH_CHAR_SUCCESS,FETCH_CHAT_FAIL} from  '../actions/index';
const initialState = {
  characters: [],
  isLoading:false,
  error:null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
