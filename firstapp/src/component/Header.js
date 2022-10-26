import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component {

   constructor(){
        console.log("inside constructor")
        super()
        this.state={
            title:'React Application',
            keyword:'User Text Here'
        }
   }

   handleChange = (event) => {
       //console.log(event.target.value)
       this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
       this.props.userInput(event.target.value)
   }

    render(){
       // console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <input onChange={this.handleChange}/>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header;