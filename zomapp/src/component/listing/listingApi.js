import React,{Component} from 'react';
import axios from './axios';
import './listing.css';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    
    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter"></div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
    }
}

export default Listing;