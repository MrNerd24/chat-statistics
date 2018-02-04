import React, {Component} from 'react'
import AppBar from '../Containers/AppBar'
import TotalCounts from '../Containers/TotalCounts'
import CountChart from '../Containers/CountChart'
import CountTable from '../Containers/CountTable'
import styled from 'styled-components'
import {minWidth, minWidthForGrid} from "../Settings";
import TokenForm from "../Containers/TokenForm";
import DatesForm from "../Containers/DatesForm";

export default class Main extends Component {

	render() {
		return (
			<Grid>
				<AppBar/>
				<DatesForm/>
				<TokenForm/>
				<TotalCounts/>
				<CountChart/>
				<CountTable/>
			</Grid>
		)
	}

}

const Grid = styled.div`

	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: ${minWidth}px;
	
	
	@media (min-width: ${minWidthForGrid}px) {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-auto-rows: max-content max-content max-content max-content;
		grid-template-areas:
			"AppBar AppBar"
			"DatesForm TokenForm"
			"TotalCounts CountChart"
			"CountTable CountTable";
	}
	

`