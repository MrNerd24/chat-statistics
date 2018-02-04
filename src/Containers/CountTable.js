import React, {Component} from 'react'
import CountTableComponent from '../Components/CountTableComponent'
import {connect} from "react-redux";
import {dailyDataLabels} from "../Settings";

export class CountTable extends Component {

	constructor(props) {
		super(props)

		this.state = {
			page: 0,
			totalPages: 0,
			shownData: [],
		}
	}

	shownStatistics = ["date", "conversation_count", "missed_chat_count", "visitors_with_conversation_count"]
	numberOfItemsPerPage = 5
	headers = this.shownStatistics.map((item) => dailyDataLabels[item])

	formatData = (dateStatistics) => {
		let formattedDate = {}

		this.shownStatistics.forEach((item) => {
			formattedDate[item] = dateStatistics[item]
		})

		return formattedDate
	}

	componentWillReceiveProps(props) {
		let totalPages = Math.ceil(props.data.by_date.length / this.numberOfItemsPerPage);

		if (totalPages !== this.state.totalPages) {
			let shownData = this.getShownData(props.data, 0);
			this.setState({
				page: 0,
				totalPages: totalPages,
				shownData: shownData
			})
		} else {
			let shownData = this.getShownData(props.data, this.state.page);
			this.setState({shownData: shownData})
		}

	}

	getShownData = (data, page) => {
		return data.by_date.map(this.formatData.bind(this)).slice(page * this.numberOfItemsPerPage, (page + 1) * this.numberOfItemsPerPage)
	}

	handlePageChange = (page) => {
		this.setState({page: page, shownData: this.getShownData(this.props.data, page)})
	}

	render() {
		return (
			<CountTableComponent
				headers={this.headers}
				data={this.state.shownData}
				page={this.state.page}
				totalPages={this.state.totalPages}
				onPageChange={this.handlePageChange}
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountTable)