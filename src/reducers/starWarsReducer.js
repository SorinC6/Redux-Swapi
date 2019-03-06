import { FETCH_CHAR_START, FETCH_CHAR_SUCCESS, FETCH_CHAT_FAIL } from '../actions/index';
const initialState = {
	characters: [],
	isLoading: false,
	error: null
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CHAR_START:
			return {
				...state,
				error: '',
				isLoading: true
			};
		case FETCH_CHAR_SUCCESS:
			//console.log(action.payload);
			return {
				...state,
				characters: action.payload,
				error: '',
				isLoading: false
			};
		case FETCH_CHAT_FAIL:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};
		default:
			return state;
	}
};
