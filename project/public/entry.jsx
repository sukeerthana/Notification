import React from 'react';
import ReactDOM from 'react-dom';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';
import SnackBar from './snackbar.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends React.Component{
	render(){
		
		return(
			<MuiThemeProvider>
			<div>
			 <AppBar title="Notifications detail" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

		<SnackBar />

			</div>
			</MuiThemeProvider>


			);
	}
}



ReactDOM.render(<App/>,document.getElementById('app'));