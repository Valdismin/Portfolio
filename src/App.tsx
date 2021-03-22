import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainBlock} from "./main/Main";
// @ts-ignore
import {Skills} from "./skills/Skills";
import {Projects} from "./works/Projects";
import {ContactBlock} from "./contact/Contact";
import {FooterBlock} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <Skills/>
            <Projects/>
            <ContactBlock/>
            <FooterBlock/>
        </div>
    );
}

export default App;
