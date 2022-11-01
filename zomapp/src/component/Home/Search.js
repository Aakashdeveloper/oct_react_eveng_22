import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component {

    constructor(){
        super()

        this.state={
            location:''
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
                    <select>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop">
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        <option>Wow Momos</option>
                        <option>Dominos</option>
                    </select>
                </div>
            </div>
        )
    }

    //api calling on page load 
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

export default Search;