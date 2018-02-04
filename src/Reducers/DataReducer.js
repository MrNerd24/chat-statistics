import {UPDATE_DATA} from '../Actions/Types'

const initialState = {
	room_id: "b88ccf85-f1c3-11e6-9805-6c4008adf7e8",
	total_visitors_with_conversation_count: 0,
	total_visitors_with_chat_count: 0,
	total_visitors_affected_by_chat_count: 0,
	total_visitors_autosuggested_count: 0,
	total_conversation_count: 0,
	total_chats_from_autosuggest_count: 0,
	total_chats_from_user_count: 0,
	total_chats_from_visitor_count: 0,
	total_visitor_message_count: 0,
	total_user_message_count: 0,
	total_missed_chat_count: 0,
	by_date: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE_DATA:
			return action.data
		default:
			return state;
	}
}