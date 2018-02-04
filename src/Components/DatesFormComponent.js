import React, {Component} from 'react'
import styled from 'styled-components'
import DateField from "./Common/DateField";
import PropTypes from 'prop-types'


export default class DatesFormComponent extends Component {

	render() {
		return (
			<Div>
				<DateField label="Start date" value={this.props.startDate} onChange={this.props.onStartDateChange}/>
				<DateField label="End date" value={this.props.endDate} onChange={this.props.onEndDateChange}/>
			</Div>
		)
	}

}


const Div = styled.div`
  	grid-area: DatesForm;
  	display: flex;
  	flex-direction: row;
  	width:90%;
  	margin: auto;
  	margin-bottom: 20px;
  	justify-content: space-between;
  
`;


DatesFormComponent.propTypes = {
	startDate: PropTypes.instanceOf(Date).isRequired,
	endDate: PropTypes.instanceOf(Date).isRequired,

	onStartDateChange: PropTypes.func.isRequired,
	onEndDateChange: PropTypes.func.isRequired,
}