import React, {Component} from 'react'
import TokenFormComponent from '../Components/TokenFormComponent'
import {connect} from "react-redux";
import {setToken} from "../Actions/SettingsActions";
import DataManager from "../Data/DataManager";

export class DatesForm extends Component {

	timeout = null

	handleTokenChange = (event, newValue) => {
		this.props.onTokenChange(newValue)
		if (this.timeout) {
			clearTimeout(this.timeout)
		}
		this.timeout = setTimeout(() => {
			DataManager.updateData()
			DataManager.saveToken()
		}, 2000)
	}

	render() {
		return (
			<TokenFormComponent
				token={this.props.token}
				tokenIsValid={this.props.tokenIsValid}

				onTokenChange={this.handleTokenChange}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		token: state.settings.token,
		tokenIsValid: state.settings.tokenIsValid
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTokenChange: (token) => {
			dispatch(setToken(token))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesForm)