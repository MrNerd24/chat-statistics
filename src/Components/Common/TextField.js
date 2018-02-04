import React, {Component} from 'react'
import MuiTextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

export default class TextField extends Component {


	render() {
		return (
			<MuiTextField
				{...this.props}
				floatingLabelText={this.props.label}
			/>
		)
	}

}


TextField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}