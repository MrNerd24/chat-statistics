import React, {Component} from 'react'
import CountChartComponent from '../Components/CountChartComponent'
import {connect} from "react-redux";

export class CountChart extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedStatistic: "chats_from_autosuggest_count"
		}
	}

	dataMapper(data) {

		let date = new Date(data.date)
		let dateString = `${date.getDate()}.${date.getMonth() + 1}`

		return {
			value: data[this.state.selectedStatistic],
			date: dateString
		}
	}

	render() {

		let data = this.props.data.by_date.map(this.dataMapper.bind(this))

		return (
			<CountChartComponent
				data={data}
				onTypeChange={(type) => this.setState({selectedStatistic: type})}
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

export default connect(mapStateToProps, mapDispatchToProps)(CountChart)