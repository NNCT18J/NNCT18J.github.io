import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Http404 from "./page/http404/Http404";

const App = () => {
    const [site] = useState(data.site)
    const [pages] = useState(data.pages)

    return (
        <div className="App">
            <Header site={site} />
            <Router>
                <Switch>
                    {pages.map(page => 
                        <Route exact 
                            path={page.path} 
                            render={() => <page.Component data={page.data} />}>
                        </Route>
                    )}
                    <Route render={() => <Http404 />} />
                </Switch>
            </Router>
            <Footer site={site} />
        </div >
    );
}

export default App;