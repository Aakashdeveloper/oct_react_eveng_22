import React,{Component} from 'react';

const url = "http://zomatoajulypi.herokuapp.com/menuItem";

class PlaceOder extends Component {

    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Vishali',
            email:'vishali@gmail.com',
            cost:0,
            phone:9876543212,
            address:'KY 34 sector 12',
            menuItem:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order From Restaurants {this.state.hotel_name} </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input className="form-control" name='name'
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input className="form-control" name='email'
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Phone</label>
                                <input className="form-control" name='phone'
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Address</label>
                                <input className="form-control" name='address'
                                value={this.state.address} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs.{this.state.cost}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    //calling api  
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        console.log(orderId)
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
           
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(">>>",data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice+Number(item.menu_price)
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
}

export default PlaceOder