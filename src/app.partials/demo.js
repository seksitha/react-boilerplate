import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {dispatcher} from "./../app.utils"

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary
	}
});

function FullWidthGrid(props) {
   const { classes } = props;
   // console.log(props)
   const handleClick = ()=>{
      props.dispatch({type:'helo', payload:null})
   }

	return (
		<div className={classes.root}>
         <button onClick={handleClick}>helo</button>
		</div>
	);
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (props) => {
	
	return {
      props
		// withrouter is passing prop to this as well
	};
};
// const dispatchAction = (type,data)=>({type:type,payload:data})
const mapDispatchToProps = dispatch => {
   return {dispatch}; // resquestApiData is the actionCreator
};

export default withRouter(
   withStyles(styles)( 
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FullWidthGrid))
);