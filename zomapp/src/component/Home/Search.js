import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {

    constructor(){
        super()

        this.state={
            location:'',
            restData:''
        }
       // console.log("inside constructor>>>")
    }

    renderCity = (data) => {
        console.log("<<<<",data)
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.state_id} key={item._id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=>{
        let stateId = event.target.value
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restData:data})})
    }

    handleRest = (event) => {
        console.log(">>>porps>>",this.props)
        this.props.history.push(`/details?restId=${event.target.value}`)
    }

    render(){
        console.log("inside render>>>")
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div class="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop" onChange={this.handleRest}>
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        {this.renderRest(this.state.restData)}
                    </select>
                </div>
            </div>
        )
    }

    // api calling on page load 
    componentDidMount(){
        console.log("inside componentDidMount>>>")
        fetch(lurl,{method: 'GET'})
        // return promise
        .then((res) => res.json())
        // return data
        //console.log(data)
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}

export default withRouter(Search);