import Store from '../Store'
import ApiDao from './ApiDao'
import DataActions from "../Actions/DataActions";
import SettingsActions from "../Actions/SettingsActions";

const millisecondsIn180Days = 15550000000


export const updateData = async () => {
	let token = Store.getState().settings.token
	let start = Store.getState().settings.start
	let end = Store.getState().settings.end

	if (end.getTime() - start.getTime() < 0) {
		let temp = end
		end = start
		start = temp
	}

	if (end.getTime() - start.getTime() > millisecondsIn180Days) {
		end = new Date(start.getTime() + millisecondsIn180Days)
	}

	try {
		let data = await ApiDao.getData(token, start, end)
		data.by_date.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		Store.dispatch(DataActions.updateData(data))
		Store.dispatch(SettingsActions.setTokenIsValid(true))
	} catch (e) {
		Store.dispatch(SettingsActions.setTokenIsValid(false))
	}

}

export const pullSettingsFromLocalstorage = () => {
	pullStartDate()
	pullEndDate()
	pullToken()
	updateData()
}

export const pullStartDate = () => {
	let item = window.localStorage.getItem("startDate");
	if (item) {
		let date = new Date(Number(item))
		Store.dispatch(SettingsActions.setStart(date))
	}
}

export const pullEndDate = () => {
	let item = window.localStorage.getItem("endDate");
	if (item) {
		let date = new Date(Number(item))
		Store.dispatch(SettingsActions.setEnd(date))
	}
}

export const pullToken = () => {
	let token = window.localStorage.getItem("token");
	if (token) {
		Store.dispatch(SettingsActions.setToken(token))
	}

}

export const saveStartDate = () => {
	let date = Store.getState().settings.start.getTime();
	window.localStorage.setItem("startDate", date)
}

export const saveEndDate = () => {
	let date = Store.getState().settings.end.getTime();
	window.localStorage.setItem("endDate", date)
}

export const saveToken = () => {
	let token = Store.getState().settings.token;
	window.localStorage.setItem("token", token)
}

export default {
	updateData,
	pullSettingsFromLocalstorage,
	saveStartDate,
	saveEndDate,
	saveToken
}