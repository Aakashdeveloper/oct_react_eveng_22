import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay'

const url = "https://zomatoajulypi.herokuapp.com/quicksearch"
class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div id="quickSearch">
                <span id="quickHeading">Quick Search</span>
                <span id="quickSubHeading">Find Restaurants By Meal Type</span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    //api call on page load
    componentDidMount(){
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;