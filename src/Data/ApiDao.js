import Axios from 'axios'

const toISODate = (date) => {
	let year = date.getYear() + 1900;
	let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	let dateString = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

	return `${year}-${month}-${dateString}`
}

export const getData = async (token, start, end) => {

	let url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${toISODate(start)}&end_date=${toISODate(end)}`;
	let config = {headers: {Authorization: `Token ${token}`}};

	let response = await Axios.get(url, config)
	return response.data
}

export default {getData}