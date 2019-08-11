import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import clsx from "clsx";
import { Link } from 'react-router-dom'
// import {useTheme} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 500,
		hight: 200,
		// backgroundColor: "white",
    //   marginBottom: "-15px",
      // color: 'yellow',
      // '& :hover':{
      //    backgroundColor: 'red',
      // },
      // '& button' : { // space is require
      //    backgroundColor: 'blue'
      // }
      '& .MuiTab-textColorInherit':{
         opacity : 1,
      }
   },
   bar: {
      // backgroundColor:'green'
   }
}));

export default function MenuTabs(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
      setValue(newValue);
	}

	return (
		<Tabs
			className={clsx([classes.root])}
			value={value}
			onChange={handleChange}
         // variant="fullWidth"
         // indicatorColor = "white"
         // textColor = "white"
		>
			
            <Tab className={clsx( props.navSelected === 0 && classes.bar)} component={Link} to={{pathname: "/items", search:"?department=1"}} label="Original" />
			<Tab className={clsx( props.navSelected === 1 && classes.bar)} component={Link} to={{pathname: "/items", search:"?department=2"}}  label="Nature" />
			<Tab className={clsx( props.navSelected === 2 && classes.bar)} component={Link} to={{pathname: "/items", search:"?department=3"}}  label="Seasonal" />
		</Tabs>
	);
}
