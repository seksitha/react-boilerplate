import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// import Header from './01.Partial/Header'
import { store } from "./app.store";
import AppRouter from "./app.router";
// import './../../style.css'

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="container-fluid">
						{/* <Header /> */}
						<AppRouter /> {/* this component check the loglin */}
					</div>
				</Router>
			</Provider>
		);
	}
}
ReactDOM.render(<App />, document.querySelector("#root"));
