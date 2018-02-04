import React, {Component} from 'react'
import AppBarComponent from '../Components/AppBarComponent'
import {connect} from "react-redux";
import DataManager from "../Data/DataManager";

export class AppBar extends Component {


	render() {
		return (
			<AppBarComponent
				onRightIconButtonClick={() => {
					DataManager.updateData()
				}}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)