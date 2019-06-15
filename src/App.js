import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LandingPage from "./containers/LandingPage/LandingPage";
import Home from "./containers/Home/Home";
import Preference from "./containers/Preference/Preference";
import LandingPageAdmin from "./containers/LandingPageAdmin/LandingPageAdmin";
import Welcome from './containers/Welcome/Welcome';
import * as actions from "./store/actions/index";

function App({ user, onGetUser }) {
    useEffect(() => {
        onGetUser();
    }, [onGetUser]);

    let routes = (
        <Switch>
            <Route path="/user" exact component={LandingPage} />
            <Route path="/admin" exact component={LandingPageAdmin} />
            <Route path="/" exact component={Welcome} />
            <Redirect to="/" />
        </Switch>
    );

    if (user) {
        routes = (
            <Switch>
                <Route path="/preference" exact component={Preference} />
                <Route path="/home" exact component={Home} />
                <Redirect to="/home" />
            </Switch>
        );
    }

    return <div>{routes}</div>;
}

const mapStateToProps = state => {
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actions.getUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
