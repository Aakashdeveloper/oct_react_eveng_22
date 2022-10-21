import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <>
            <Header/>
            <h1>Hiii From React</h1>
            <h2>Test Component</h2>
            <Footer year="2022" month="Oct"/>
        </>
    )
}

export default App;
