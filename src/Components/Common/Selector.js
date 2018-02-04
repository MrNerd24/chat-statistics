import React, {Component} from 'react'
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import PropTypes from 'prop-types'

export default class Selector extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: 1
		}
	}

	handleChange = (event, index, value) => {
		this.setState({value: value})
		this.props.onChange(Object.keys(this.props.items)[index])
	}

	render() {
		return (
			<div>
				<DropDownMenu
					value={this.state.value}
					onChange={this.handleChange}
				>
					{Object.keys(this.props.items).map((item, index) => {
						return (
							<MenuItem key={item} value={index + 1} primaryText={this.props.items[item]}/>
						)
					})}
				</DropDownMenu>
			</div>
		)
	}

}

Selector.propTypes = {
	onChange: PropTypes.func.isRequired,
	items: PropTypes.object
}