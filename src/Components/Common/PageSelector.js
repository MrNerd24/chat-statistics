import React, {Component} from 'react'
import LeftIcon from 'material-ui/svg-icons/navigation/chevron-left'
import RightIcon from 'material-ui/svg-icons/navigation/chevron-right'
import styled from 'styled-components'
import {orange500} from "material-ui/styles/colors";
import PropTypes from 'prop-types'

export default class PageSelector extends Component {

	shownNumbers = () => {
		let amountOfNumbers = Math.min(7, this.props.totalPages)
		let currentPage = this.props.page + 1
		let start
		let end

		if (currentPage <= Math.floor(amountOfNumbers / 2)) {
			start = 1
			end = amountOfNumbers
		} else if (currentPage >= this.props.totalPages - Math.floor(amountOfNumbers / 2)) {
			end = this.props.totalPages
			start = this.props.totalPages - amountOfNumbers + 1
		} else {
			start = currentPage - Math.floor(amountOfNumbers / 2)
			end = currentPage + Math.floor(amountOfNumbers / 2)
		}

		let ans = []
		for (let i = start; i <= end; i++) {
			ans.push(i)
		}
		return ans;
	}

	render() {

		return (
			<Div>
				<Box onClick={() => this.props.onPageChange(Math.max(0, this.props.page - 1))}>
					<LeftIcon/>
				</Box>
				{this.shownNumbers().map((number) =>
					<Box
						style={number - 1 === this.props.page ? {color: orange500} : {}}
						onClick={() => this.props.onPageChange(number - 1)}
						key={number}>{number}
					</Box>
				)}
				<Box onClick={() => this.props.onPageChange(Math.min(this.props.page + 1, this.props.totalPages - 1))}>
					<RightIcon/>
				</Box>
			</Div>
		)
	}

}

const Div = styled.div`
	display: flex;
	flex-direction: row;
`

const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 20px;
	text-align: center;
	line-height: 20px;
`

PageSelector.propTypes = {
	page: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired
}