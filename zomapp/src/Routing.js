import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './component/Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;