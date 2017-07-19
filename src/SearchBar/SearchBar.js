import React, {Component}  from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


import SelectPassengers from './SelectPassengers';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            orderByPrice: 'asc',
            orderByStars: 'asc',
            orderByWaitTime: 'asc',
            orderByDurationTime: 'asc',

        };

        this.handlder = this.handlder.bind(this);

        this.changeOrderPrice = this.changeOrderPrice.bind(this);
        this.changeOrderStars = this.changeOrderStars.bind(this);
        this.changeOrderWait = this.changeOrderWait.bind(this);
        this.changeOrderDuration = this.changeOrderDuration.bind(this);


    }

    handlder() {
        this.props.searchHandler();
    }

    changeOrderPrice(event)
    {
        console.log('change price');
        console.log(event.target.value);
        var self = this;
        self.setState({orderByPrice : event.target.value});
        this.props.updateSearchPageCompo({ price : event.target.value});
    }

    changeOrderStars(event)
    {
        console.log('change stars');
        console.log(event.target.value);
        var self = this;
        self.setState({orderByStars : event.target.value});
        this.props.updateSearchPageCompo({ stars : event.target.value});
    }


    changeOrderWait(event)
    {
        console.log('change wait time');
        console.log(event.target.value);
        var self = this;
        self.setState({orderByWaitTime : event.target.value});
        this.props.updateSearchPageCompo({ wait : event.target.value});
    }

    changeOrderDuration(event)
    {
        console.log('change duration time');
        console.log(event.target.value);
        var self = this;
        self.setState({orderByDurationTime : event.target.value});
        this.props.updateSearchPageCompo({ duration : event.target.value});
    }


    render() {

        let product = this.props.product;
        console.log('Render SearchBar ' + product);

        let showTo = true;
        let showStars = false;
        let showWaitTime = false;
        let showDurationTime = false;



        if (this.props.product === 'hotel' ) {
            showTo = false;
            showStars = true;
        }

        if ( (this.props.product === 'air' ) || (this.props.product === 'ship') ) {
            showWaitTime = true;
            showDurationTime = true;
        }




        return (<div className="row">
            <div className="col-md-12">


                <div className="panel panel-primary">
                    <div className="panel-heading">Search Form</div>
                    <div className="panel-body">


                        <div className="row">
                            <div className="col-md-5">
                                One Way

                                <input type="radio"/>

                                Round Trip


                                <input type="radio"/>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-md-5">
                                <input type="text" placeholder="From Airport"
                                       className="form-control"/>
                            </div>

                            { showTo ?
                            (<div className="col-md-5">
                                <input type="text" placeholder="To Airport"
                                       className="form-control"/>
                            </div>) : (<div></div>) }
                        </div>


                        <br/>



                        <div className="row">
                            <div className="col-md-5">
                                <DatePicker className="form-control" selected={this.state.date}/>
                            </div>


                            <div className="col-md-5">
                                <DatePicker className="form-control" selected={this.state.date}/>
                            </div>


                            <div className="col-md-2">
                               <button className="btn btn-success" onClick={this.handlder}>Search</button>
                            </div>
                        </div>


                        <br/>


                        

                        <div className="row">
                            <div className="col-md-12">

                               <SelectPassengers />

                                order by select boxes price duration segments
                            </div>
                        </div>


                        <br/>

                        <div className="row">
                            <div className="col-md-3">

                                Order By Price
                                <select className="form-control" value={this.state.orderByPrice} onChange={this.changeOrderPrice}>
                                    <option key="0" value="asc">Ascending</option>
                                    <option key="1" value="desc">Descending</option>
                                </select>
                            </div>


                            { showStars ?
                                (<div className="col-md-3">

                                    Order By Stars
                                    <select className="form-control" value={this.state.orderByStars}
                                            onChange={this.changeOrderStars}>
                                        <option key="0" value="asc">Ascending</option>
                                        <option key="1" value="desc">Descending</option>
                                    </select>
                                </div>) : (<div></div>)}


                            { showWaitTime ?
                                (<div className="col-md-3">

                                    Order By wait time
                                    <select className="form-control" value={this.state.orderByWaitTime}
                                            onChange={this.changeOrderWait}>
                                        <option key="0" value="asc">Ascending</option>
                                        <option key="1" value="desc">Descending</option>
                                    </select>
                                </div>) : (<div></div>)}


                            { showDurationTime ?
                                (<div className="col-md-3">

                                    Order By duration time
                                    <select className="form-control" value={this.state.orderByDurationTime}
                                            onChange={this.changeOrderDuration}>
                                        <option key="0" value="asc">Ascending</option>
                                        <option key="1" value="desc">Descending</option>
                                    </select>
                                </div>) : (<div></div>)}
                        </div>





                    </div>

                </div>

            </div>

        </div>)
    }
}

export default SearchBar;