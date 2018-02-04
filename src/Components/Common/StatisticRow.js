import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Divider from "material-ui/Divider";

export default class StatisticRow extends Component {

	render() {
		return (
			[
				<Div key="div">
					<H1>{this.props.name}</H1>
					<P>{this.props.value}</P>
				</Div>,
				<Divider key="divider"/>
			]
		)
	}

}

const H1 = styled.h1`
	font-size: 24px;
	line-height: 80px;
	margin: 0;
	font-weight: normal;
	vertical-align: middle;
`

const P = styled.p`
	font-size: 24px;
	line-height: 80px;
	margin: 0;
	vertical-align: middle;
`

const Div = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	height: 80px;
	justify-content: space-evenly;
`

StatisticRow.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired
}