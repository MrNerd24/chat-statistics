import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextField from "./Common/TextField";


export default class TokenFormComponent extends Component {

	render() {
		return (
			<Div>
				<TextField
					style={Style.textField}
					label="Access token"
					value={this.props.token}
					onChange={this.props.onTokenChange}
					errorText={this.props.tokenIsValid ? "" : "Token is invalid"}
				/>
			</Div>
		)
	}

}

const Style = {
	textField: {
		width: "100%"
	},
}

const Div = styled.div`
  	grid-area: TokenForm;
  	display: flex;
  	flex-direction: column;
  	width:90%;
  	margin: auto;
  	margin-bottom: 20px;
  
`;


TokenFormComponent.propTypes = {
	token: PropTypes.string.isRequired,
	onTokenChange: PropTypes.func.isRequired
}