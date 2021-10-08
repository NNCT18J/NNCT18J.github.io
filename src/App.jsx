import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Http404 from "./common/http404/Http404";

const App = () => {
    const [site] = useState(data.site)
    const [pages] = useState(data.pages)

    return (
        <div className="App">
            <Router>
                <Header site={site} />
                <Navbar links={pages.map(page => {return {path: page.path, title: page.title}})} />
                <Switch>
                    {pages.map(page => 
                        <Route exact 
                            path={page.path} 
                            render={() => <page.Component data={page.data} />}>
                        </Route>
                    )}
                    <Route render={() => <Http404 />} />
                </Switch>
                <Footer site={site} />
            </Router>
        </div >
    );
}

export default App;