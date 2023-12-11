import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Treatment from './pages/Treatment';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import Component_8 from './components/Component_8';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/treatment"}`} component={Treatment} />
                <Route exact path={`${process.env.PUBLIC_URL + "/doctors"}`} component={Doctors} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route exact path={`${process.env.PUBLIC_URL + "/testimonial"}`} component={Testimonial} />
            </Switch>
            <Component_8/>
            <Footer />
        </BrowserRouter>
    )
}