import React from 'react'
import {Router, Route, Redirect, IndexRoute, hashHistory} from "react-router";

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Dashboard2 from "../dashboard2/dashboard2";
import AuthOrApp from "./authOrApp";

export default props => (
    <Router history={hashHistory}>
        <Route path={'/'} component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path={'billingCycles'} component={BillingCycle}/>
        </Route>
        <Redirect from={'*'} to={'/'}/>
    </Router>
)