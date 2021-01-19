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
                    <Route exact path="/todof_fractal">
                        <BucketContainer />
                    </Route>
                    <Route exact path="/todof_fractal/home">
                        <BucketContainer />
                    </Route>
                    <Route eaxct path="/todof_fractal/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;