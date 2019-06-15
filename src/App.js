import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";

function App() {
  let routes = (
    <Switch>
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
    </Switch>
);

return (
    <div>
        {routes}
    </div>
);
}

export default App;
