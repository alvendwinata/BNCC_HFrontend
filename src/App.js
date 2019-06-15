import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";
import Home from "./containers/Home/Home";

function App() {
    let routes = (
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/" />
        </Switch>
    );

    return <div>{routes}</div>;
}

export default App;
