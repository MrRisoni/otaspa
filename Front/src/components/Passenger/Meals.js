import React, {Component} from 'react';

import SelectBox from '../SelectBox';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.mealsHandler = this.mealsHandler.bind(this);
    }

    mealsHandler() {

    }

    render() {
        return (<div className="row">
            <div className="col-md-10">
                Select from the menu

                <div className="row">
                    <div className="col-md-2">
                    Appetizer
                    </div>
                    <SelectBox
                        classColSize="col-md-8"
                        optionsList={this.props.data.appetizers}
                        idAsValue={true}
                        changeHandler={this.mealsHandler}/>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        Mains
                    </div>
                    <SelectBox
                        classColSize="col-md-8"
                        optionsList={this.props.data.mains}
                        idAsValue={true}
                        changeHandler={this.mealsHandler}/>
                </div>


                <div className="row">
                    <div className="col-md-2">
                        Desserts
                    </div>
                    <SelectBox
                        classColSize="col-md-8"
                        optionsList={this.props.data.desserts}
                        idAsValue={true}
                        changeHandler={this.mealsHandler}/>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        Drinks
                    </div>
                    <SelectBox
                        classColSize="col-md-8"
                        optionsList={this.props.data.drinks}
                        idAsValue={true}
                        changeHandler={this.mealsHandler}/>
                </div>


            </div>
        </div>);
    }
}


export default Meals;