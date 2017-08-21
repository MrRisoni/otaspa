import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
class Passenger extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        console.log('Change passenger type');
        console.log(ev.target.value);
        this.props.otastore.changePaxType( {id:0 , type:ev.target.value});
    }

    render() {
        return (
            <div>

                <select className="form-control" onChange={this.handleChange}>

                    <option key="ADT" value="ADT">ADT</option>
                    <option key="CNN" value="CNN">CNN</option>
                    <option key="INF" value="INF">INF</option>


                </select>


                <div> Component Passenger</div>
            </div>

        );
    }
}

export default Passenger;


