import React,{Component} from 'react';
import axios from 'axios';
import './details.css'

const url = " http://zomatoajulypi.herokuapp.com/details";

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
           <>
            <div className="main">
                <div className="tileImage">
                    <div className="imageClass">
                        <img src={details.restaurant_thumb} alt=""/>
                    </div>
                </div>
                <div className="tileContent">
                    <div className="content">
                        <h1>{details.restaurant_name}</h1>
                        <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Offer Price Rs. {details.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </>
        )
    }

    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        this.setState({details:response.data[0]})
    }
}

export default Details;