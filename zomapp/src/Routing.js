import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/listing/:id' component={Listing}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;