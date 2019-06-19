import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// import Header from './01.Partial/Header'
import { store } from "./app.store&middleware";
import AppRouter from "./app.router";
import Header from "./app.partials/app.header";
// import './../../style.css'
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2e2e2e",
		},
		secondary: {
			main: "#f62f5e",
      },
      info: {
         main: 'green'
      },
      warning: {
         main: 'Red'
      },
      danger: {
         main: 'orange'
      }
	},
	status: {
		danger: "orange",
   },
   text:{
      textColor: 'Yellow'
   }
});
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Router>
						<div className="container-fluid">
							<Header />
							<AppRouter /> {/* this component check the loglin */}
						</div>
					</Router>
				</ThemeProvider>
			</Provider>
		);
	}
}
ReactDOM.render(<App />, document.querySelector("#root"));
