import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import NotFound from "./common/notFound/NotFound";

import './app.css'

const App = () => {
    const [site] = useState(data.site)
    const [pages] = useState(data.pages)

    return (
        <div className="app">
            <Router>
                <Header
                    site={site} links={pages.map(page => {return {path: page.path, title: page.title}})} 
                    className="header"
                />

                {/* URIに対応するページを表示 */}
                <main className="bg-gray-300">
                    <Switch>
                        {pages.map(page => 
                            <Route exact 
                                path={page.path} 
                                render={() => 
                                    <page.Component 
                                        title={page.title} 
                                        data={page.data} 
                                    />
                                }>
                            </Route>
                        )}

                        <Route render={() => <NotFound />} />
                    </Switch>
                </main>

                <Footer site={site} className="footer" />
            </Router>
        </div>
    );
}

export default App;