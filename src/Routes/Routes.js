import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from '../Component/About/About';
import BucketContainer from '../Container/BucketContainer';
import Header from '../Layout/Header';

const Routes = () => {
    return (
        <Router>
            <Header />
            <div className="buckets app_content">
                <Switch>
                    <Route exact path="/">
                        <BucketContainer />
                    </Route>
                    <Route exact path="/home">
                        <BucketContainer />
                    </Route>
                    <Route eaxct path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;