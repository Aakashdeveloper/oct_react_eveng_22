import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hiii From React</h1>
            <h2>Test Component</h2>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)



//import React from 'react';
// var React = require('react');
// var ReactDOM = require('react-dom/client')
// //import ReactDOM from 'react-dom/client';

// function App(){
//     return(
//         <h1>Hiii From React Es5</h1>
//     )
// }

// // const App = () => {
// //     return(
// //         <h1>Hiii From React</h1>
// //     )
// // }

// //ReactDOM.render(<App/>, document.getElementById('root'))
