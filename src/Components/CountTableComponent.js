import React, {Component} from 'react'
import styled from 'styled-components'
import StatsTable from "./Common/StatsTable";
import PageSelector from "./Common/PageSelector";
import PropTypes from 'prop-types'


export default class CountTableComponent extends Component {

	render() {
		return (
			<Div>
				<StatsTable
					headers={this.props.headers}
					data={this.props.data}
				/>
				<PageSelector
					page={this.props.page}
					totalPages={this.props.totalPages}
					onPageChange={this.props.onPageChange}
				/>
			</Div>
		)
	}

}

const Div = styled.div`
  grid-area: CountTable;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: auto;
`;

CountTableComponent.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string).isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	page: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
}