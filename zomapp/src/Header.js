import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'


const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus','loggedOut')
        this.setState({userData:''});
        
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','loggedIn')
            return(
                    <>
                        <Link className="btn btn-info" to="/">
                            <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                        </Link> &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>
                            <span className="glyphicon glyphicon-log-out"></span> Logout
                        </button>
                    </>
            )
        }else{
            return(
                <>
                    <Link className="btn btn-success" to="/login">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link> &nbsp;
                    <Link className="btn btn-info" to="/register">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </>
            )
        }
    }

    render(){
        return(
            <header>
                <div id="icon">
                    <h1><Link to="/">Xomato</Link></h1>
                </div>
                <div id="loginset">
                    {this.conditionalRender()}
                    
                </div>

            </header>
        )
    }

    // api 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }

}

export default Header;