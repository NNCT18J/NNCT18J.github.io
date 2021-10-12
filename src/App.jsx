import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import NotFound from "./common/notFound/NotFound";

const App = () => {
    const [site] = useState(data.site)
    const [pages] = useState(data.pages)

    return (
        <div className="flex flex-col w-screen min-h-screen">
            <Router>
                <Header
                    site={site} links={pages.map(page => {return {path: page.path, title: page.title}})} 
                    className="flex-initial"
                />

                {/* URIに対応するページを表示 */}
                <Switch className="flex-1 bg-gray-200">
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

                <Footer site={site} className="flex-initial" />
            </Router>
        </div>
    );
}

export default App;