import React, {Component} from 'react'
import styled from 'styled-components'
import Selector from './Common/Selector'
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {dailyDataLabels} from "../Settings";
import {orange500} from "material-ui/styles/colors";
import PropTypes from 'prop-types'


export default class CountChartComponent extends Component {

	render() {
		let dailyDataLabelsWithoutDate = {...dailyDataLabels};
		delete dailyDataLabelsWithoutDate.date
		return (
			<Div>
				<ResponsiveContainer height={"100%"} width={"90%"} minHeight={240}>
					<LineChart data={this.props.data}>
						<Line type="monotone" dataKey="value" stroke={orange500}/>
						<XAxis dataKey="date"/>
						<Tooltip/>
					</LineChart>
				</ResponsiveContainer>
				<Selector items={dailyDataLabelsWithoutDate} onChange={this.props.onTypeChange}/>
			</Div>
		)
	}

}


const Div = styled.div`
  grid-area: CountChart;
  padding-top:10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

CountChartComponent.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	onTypeChange: PropTypes.func.isRequired
}