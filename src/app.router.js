import React from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { dispatcher } from './app.utils';
import NotFound from './app.components/app.notFound'
import Demo from './app.components/demo'

import RecipeReviewCard from './app.components/card'



class AppRouter extends React.Component {
    login = (val) => {
        this.props.dispatcher('$$mw-POST_LOGIN', val)
    }
    handleload = e => {
        const confirmationMessage = 'helo worl';
        e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
        return confirmationMessage;
    }
    componentDidMount() {
        // setInterval(()=>this.props.dispatcher('$$mw-UPLOAD-DATA', {}),1000*60*60);
        // (!Object.keys(this.props.user).length) && this.props.dispatcher('$$mw-JUST_TO_RUN_MW', this.props.user);
        //console.log(this.props)
    }

    componentWillUpdate(nextProps) {
      
        const { location, match: { params } } = nextProps
        
        // this.props.dispatcher('$$mw-ROUTE_ON_CHANGE', { location, params })


    }

    render() {
        // const { user, initInfoState } = this.props;
       // if (this.props.isLoginSuccess === false) {
          
            return (
                <Switch>
                    <Route exact path="/" render={() => <Demo />} />
                    <Route exact path="/card" render={() => <RecipeReviewCard propsme = {this.props}  />} />
                    <Route component={NotFound} /> {/* in this component we check the loglin*/}
                </Switch>
            )

        // } else if (this.props.isLoginSuccess === true && initInfoState) {
        //     return (
        //         <Switch>
        //             <Route exact path="/login" render={RedirectToHome} />
        //             <Route exact path="/logout" render={() => <Logout {...this.props} />} />
        //             <Route
        //                 exact
        //                 path="/sale/:saleType"
        //                 render={() => { return <SaleContainer /> }}
        //             /> 
        //             <Route exact path="/" render={() => <Redirect to={{ pathname: "/sale/shop" }} />} /> 
        //             <Route
        //                 path="/list-info/:listName"
        //                 render={
        //                     () => user.role === 'admin' ? <ListContainer /> : <Redirect to={{ pathname: "/notFound" }} />
        //                 }
        //             />
        //             <Route 
        //                 path="/finance/:financeType" 
        //                 render={
        //                     () => user.role === 'admin' ? <SewingExpenseContainer /> : <Redirect to={{ pathname: "/notFound" }} />
        //                 } 
        //             />
        //             <Route exact path="/report" render={() => <ReportContainer />} /> 
        //             <Route exact path="/inventory" render={() => <InventoryContainer />} /> 
                  //   <Route component={NotFound} /> {/* in this component we check the loglin*/}
        //         </Switch>
        //     )
        // } else { // undefined require becuase we dont want to show glitch and reload
        //     return <Spinner />
        // }
    }
}
const mapStateToProps = (props) => { // this is the props that pass to component and redux map not higher order component 
    return {
        ...props
    }
};
// const dispatchAction = (type,data)=>({type:type,payload:data})
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ dispatcher }, dispatch); // resquestApiData is the actionCreator
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
