import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import clsx from "clsx";
import {useTheme} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 500,
		hight: 200,
		// backgroundColor: "white",
      marginBottom: "-15px",
      color: 'yellow',
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
   bar:{
      backgroundColor:'green'
   }
}));

export default function IconLabelTabs(props) {
	const classes = useStyles();
	// console.log(classes);
	const [value, setValue] = React.useState(0);
   const theme = useTheme()
   // console.log(theme)
   let me = 0;
	function handleChange(event, newValue) {
      me++
      setValue(newValue);
      console.log(me)
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
			<Tab className={clsx( props.navSelected === 0 && classes.bar)} label="RECENTS" />
			<Tab className={clsx( props.navSelected === 1 && classes.bar)} label="FAVORITES" />
			<Tab className={clsx( props.navSelected === 2 && classes.bar)} label="NEARBY" />
		</Tabs>
	);
}
