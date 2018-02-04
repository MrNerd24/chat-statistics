import {SET_START, SET_TOKEN, SET_END, SET_TOKEN_IS_VALID} from "./Types";

export const setToken = (token) => {
	return {
		type: SET_TOKEN,
		token: token
	}
}

export const setStart = (start) => {
	return {
		type: SET_START,
		start: start
	}
}

export const setEnd = (end) => {
	return {
		type: SET_END,
		end: end
	}
}

export const setTokenIsValid = (valid) => {
	return {
		type: SET_TOKEN_IS_VALID,
		valid: valid
	}
}

export default {setToken, setStart, setEnd, setTokenIsValid}