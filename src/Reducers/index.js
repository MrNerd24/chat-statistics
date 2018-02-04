import {combineReducers} from 'redux'
import data from './DataReducer'
import settings from './SettingsReducer'

export default combineReducers(
	{data, settings}
)