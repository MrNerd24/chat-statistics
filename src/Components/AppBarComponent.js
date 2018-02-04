import React, {Component} from 'react'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import IconButton from "material-ui/IconButton";
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh'
import PropTypes from 'prop-types'

export default class AppBarComponent extends Component {

	render() {
		return (
			<Div>
				<AppBar
					title="Chat Statistics"
					showMenuIconButton={false}
					iconElementRight={<IconButton><RefreshIcon/></IconButton>}
					onRightIconButtonClick={this.props.onRightIconButtonClick}
				/>
			</Div>
		)
	}

}

const Div = styled.div`
  grid-area: AppBar;
`;

AppBarComponent.propTypes = {
	onRightIconButtonClick: PropTypes.func.isRequired
}