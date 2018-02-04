import React, {Component} from 'react'
import TotalCountsComponent from '../Components/TotalCountsComponent'
import {connect} from "react-redux";
import {totalDataLabels} from "../Settings";

export class TotalCounts extends Component {

	formatData(data) {
		return ["total_conversation_count", "total_user_message_count", "total_visitor_message_count"].map((item) => {
			return {
				name: totalDataLabels[item],
				value: data[item]
			}
		})
	}


	render() {
		return (
			<TotalCountsComponent data={this.formatData(this.props.data)}/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		data: state.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalCounts)