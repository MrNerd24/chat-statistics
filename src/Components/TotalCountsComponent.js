import React, {Component} from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import StatisticRow from "./Common/StatisticRow";
import PropTypes from 'prop-types'

export default class TotalCountsComponent extends Component {

	render() {
		return(
			<Wrapper>
				<StyledPaper zDepth={1}>
					{this.props.data.map((item) => <StatisticRow key={item.name.replace(/ /g,'')} name={item.name} value={item.value}/>)}
				</StyledPaper>
			</Wrapper>
		)
	}

}

const StyledPaper = styled(Paper)`
	width:90%;
	margin:auto;
	margin-top: 10px;
	margin-bottom: 10px;
`

const Wrapper = styled.div`
  grid-area: TotalCounts;
`;

TotalCountsComponent.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
}