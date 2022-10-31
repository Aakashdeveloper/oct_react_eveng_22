import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header>
            <div id="icon">
                <h1>Xomato</h1>
            </div>
            <div id="loginset">
                <button>Login</button>
                <button>Register</button>
            </div>

        </header>
    )
}

export default Header;