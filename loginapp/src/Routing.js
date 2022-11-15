import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './component/login';
import Register from './component/register';
import Profile from './component/profile';
import UserList from './component/userList';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/users" component={UserList} />
                <Route path="/profile" component={Profile} />
            </div>
            <Footer/>
        </BrowserRouter>
    )

}

export default Routing