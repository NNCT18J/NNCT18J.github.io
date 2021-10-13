import React, { useState } from "react";

import data from './data/init'

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Hero from "./common/hero/Hero";

import './app.css'
import ContentsTiTle from "./components/contentsTitle/ContentsTitle";

const App = () => {
    const [site] = useState(data.site)
    const [contents] = useState(data.contents)

    return (
        <div className="app">
            <Header
                site={site} links={contents.map(content => {return {path: content.path, title: content.title}})} 
                className="header"
            />

            <Hero subtitle={site.subtitle} hero={site.hero} />
            <div className="my-10">
                {contents.map(content => 
                    <div className="my-20" id={content.path}>
                        <ContentsTiTle title={content.title} />
                        <content.Component 
                            title={content.title} 
                            data={content.data} 
                        />
                    </div>
                )}
            </div>

            <Footer site={site} className="footer" />
        </div>
    );
}

export default App;