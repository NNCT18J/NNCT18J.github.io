import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Http404 from "./common/http404/Http404";

import "./css/app.css";

const App = () => {
    const [site] = useState(data.site)
    const [pages] = useState(data.pages)

    return (
        <div className="app">
            <Router>
                <Header site={site} links={pages.map(page => {return {path: page.path, title: page.title}})} />
                <main>
                    <Switch className="page">
                        {pages.map(page => 
                            <Route exact 
                            path={page.path} 
                            render={() => <page.Component data={page.data} />}>
                            </Route>
                        )}
                        <Route render={() => <Http404 />} />
                    </Switch>
                </main>
                <Footer site={site} />
            </Router>
        </div>
    );
}

export default App;