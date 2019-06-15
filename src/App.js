import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LandingPage from "./containers/LandingPage/LandingPage";
import Home from "./containers/Home/Home";
import Preference from "./containers/Preference/Preference";

import { isEmpty } from "./helpers/utility";
import * as actions from "./store/actions/index";

function App({ onGetUser }) {
    useEffect(() => {
        onGetUser();
    }, [onGetUser]);

    let routes = (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/" />
        </Switch>
    );

    if (!isEmpty(localStorage.getItem("user"))) {
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

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actions.getUser())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(App);
