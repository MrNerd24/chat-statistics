import {SET_TOKEN, SET_START, SET_END, SET_TOKEN_IS_VALID} from "../Actions/Types";

const initialState = {
	token: "",
	start: new Date(1493596800000),
	end: new Date(1497484800000),
	tokenIsValid: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_TOKEN:
			return {...state, token: action.token}
		case SET_START:
			return {...state, start: action.start}
		case SET_END:
			return {...state, end: action.end}
		case SET_TOKEN_IS_VALID:
			return {...state, tokenIsValid: action.valid}
		default:
			return state;
	}
}