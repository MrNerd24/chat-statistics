import React, {Component} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import PropTypes from 'prop-types'

export default class StatsTable extends Component {

	render() {
		return (
			<div>
				<Table allRowsSelected={false} selectable={false}>
					<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
						<TableRow>
							{this.props.headers.map((header) =>
								<TableHeaderColumn
									style={{textAlign: "center"}}
									key={header}>{header}
								</TableHeaderColumn>
							)}
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{this.props.data.map((data) =>
							<TableRow
								key={data[Object.keys(data)[0]]}
							>
								{Object.keys(data).map((item) =>
									<TableRowColumn
										style={{textAlign: "center"}}
										key={item}>{data[item]}
									</TableRowColumn>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		)
	}

}

StatsTable.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string),
	data: PropTypes.arrayOf(PropTypes.object)
}