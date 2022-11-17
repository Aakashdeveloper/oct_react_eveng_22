import React from 'react';
import './QuickSearch.css';
import { Link } from 'react-router-dom'

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div class="componentSubHeading">
                                    Start Your Day with Exclusive Breakfast Option
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
            <div class="cardMain">
                {listMeal(props)}
            </div>
    )
}

export default QuickDisplay;