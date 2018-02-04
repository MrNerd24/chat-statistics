import React, {Component} from 'react';
import Main from './Components/Main'
import Store from './Store'
import {Provider} from 'react-redux'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {orange500, lime500} from 'material-ui/styles/colors'
import DataManager from "./Data/DataManager";

class App extends Component {

	componentWillMount() {
		DataManager.pullSettingsFromLocalstorage()
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={theme}>
				<Provider store={Store}>
					<Main/>
				</Provider>
			</MuiThemeProvider>

		);
	}
}

const theme = getMuiTheme({
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: orange500,
		primary2Color: orange500,
		primary3Color: orange500,
		accent1Color: lime500,
	}
})

export default App;
