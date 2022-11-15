import React,{Component} from 'react';
import axios from 'axios';
import Display from './userDisplay';

const userUrl = "https://developerjwt.herokuapp.com/api/auth/users";

class UserList extends Component {

    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render() {
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }

        return(
           <>
            <Display userData={this.state.users}/>
           </>
        )
    }

    componentDidMount(){
        axios.get(userUrl).then((res) => {this.setState({users:res.data})})
    }
}

export default UserList