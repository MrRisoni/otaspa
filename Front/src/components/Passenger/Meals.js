import React, {Component} from 'react';

import SelectBox from '../SelectBox';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.appetizerHandler = this.appetizerHandler.bind(this);
        this.mainHandler = this.mainHandler.bind(this);
        this.dessertHandler = this.dessertHandler.bind(this);
        this.drinksHandler = this.drinksHandler.bind(this);
    }


    appetizerHandler(ev)
    {
        console.log('Appetizer ' + ev);
        this.props.mealUpdate(1,ev);
    }

    mainHandler(ev)
    {
        console.log('Main ' + ev);
    }

    dessertHandler(ev)
    {
        console.log('Dessert ' + ev);
    }

    drinksHandler(ev)
    {
        console.log('Drinks ' + ev);
    }

    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="panel panel-default">
                    <div className="panel-heading">Select from the menu</div>
                    <div className="panel-body">


                        <div className="row">
                            <div className="col-md-2">
                                Appetizer
                            </div>
                            <SelectBox
                                classColSize="col-md-8"
                                optionsList={this.props.data.appetizers}
                                idAsValue={true}
                                changeHandler={this.appetizerHandler}/>
                        </div>

                        <div className="row">
                            <div className="col-md-2">
                                Mains
                            </div>
                            <SelectBox
                                classColSize="col-md-8"
                                optionsList={this.props.data.mains}
                                idAsValue={true}
                                changeHandler={this.mainHandler}/>
                        </div>


                        <div className="row">
                            <div className="col-md-2">
                                Desserts
                            </div>
                            <SelectBox
                                classColSize="col-md-8"
                                optionsList={this.props.data.desserts}
                                idAsValue={true}
                                changeHandler={this.dessertHandler}/>
                        </div>

                        <div className="row">
                            <div className="col-md-2">
                                Drinks
                            </div>
                            <SelectBox
                                classColSize="col-md-8"
                                optionsList={this.props.data.drinks}
                                idAsValue={true}
                                changeHandler={this.drinksHandler}/>
                        </div>

                    </div>
                </div>

            </div>
        </div>);
    }
}


export default Meals;