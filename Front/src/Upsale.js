import React, {Component} from 'react';

import * as OtaActions from "./actions";


class Upsale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            price: this.props.price
        };


        this.localHandler = this.localHandler.bind(this);
    }

    localHandler() {
        if (this.state.selected) {
            this.setState({selected: false});
        }
        else {
            this.setState({selected: true});
        }


        console.log('local handler ' + this.props.obj.id + ' status ' + this.state.selected);
        OtaActions.checkedUpsale(this.props.obj.id, this.state.selected);
    }

    render() {
        const {isChecked} = this.state.selected;

        return (

            <div className="row">
                <div className="col-md-10">


                    <div className="checkbox">
                        <label>
                            <input
                                id={this.props.obj.id}
                                name={this.props.obj.title}
                                type="checkbox"
                                value={this.props.obj.id}
                                checked={isChecked}
                                onChange={this.localHandler}/>

                            {this.props.obj.title} {this.props.obj.price}
                        </label>
                    </div>


                </div>

            </div>)
    }
}


export default Upsale;