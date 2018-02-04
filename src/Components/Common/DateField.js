import React, {Component} from 'react'
import DatePicker from 'material-ui/DatePicker'
import PropTypes from 'prop-types'

export default class DateField extends Component {


	render() {
		return (
			<DatePicker
				{...this.props}
				floatingLabelText={this.props.label}
			/>
		)
	}

}

DateField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.instanceOf(Date).isRequired,
	onChange: PropTypes.func.isRequired
}