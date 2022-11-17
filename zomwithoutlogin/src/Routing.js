import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/details/restDetails';
import ViewOrder from './component/Orders/viewOrder';
import PlaceOrder from './component/Orders/placeOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/listing/:mealId' component={Listing}/>
            <Route path='/details/' component={Details}/>
            <Route path='/placeOrder/:restName' component={PlaceOrder}/>
            <Route path='/viewBooking' component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;