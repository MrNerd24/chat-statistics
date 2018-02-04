import React, {Component} from 'react'
import DatesFormComponent from '../Components/DatesFormComponent'
import {connect} from "react-redux";
import {setEnd, setStart} from "../Actions/SettingsActions";
import DataManager from "../Data/DataManager";

export class DatesForm extends Component {


	handleStartDateChange = async (nullValue, date) => {
		await this.props.onStartChange(date)
		DataManager.updateData()
		DataManager.saveStartDate()
	}

	handleEndDateChange = async (nullValue, date) => {
		await this.props.onEndChange(date)
		DataManager.updateData()
		DataManager.saveEndDate()
	}


	render() {
		return (
			<DatesFormComponent
				startDate={this.props.start}
				endDate={this.props.end}

				onStartDateChange={this.handleStartDateChange}
				onEndDateChange={this.handleEndDateChange}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		start: state.settings.start,
		end: state.settings.end,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onStartChange: (date) => {
			dispatch(setStart(date))
		},
		onEndChange: (date) => {
			dispatch(setEnd(date))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesForm)