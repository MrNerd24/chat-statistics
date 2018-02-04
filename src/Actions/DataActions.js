import {UPDATE_DATA} from "./Types";

export const updateData = (data) => {
	return {
		type: UPDATE_DATA,
		data: data
	}
}

export default {updateData}