import React, {Component} from 'react';


import Names from './Personal/Names';
import BaggageList from './Baggages/BaggageList';
import UpgradeFare from './UpgradeFare';
import  InsurancePanel from './Insurance/InsurancePanel';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);


        this.getSelectedBags = this.getSelectedBags.bind(this);
        this.clickedFare = this.clickedFare.bind(this);


    }

    getSelectedBags(data)
    {
        console.log(data);
        this.props.updatePapList({ passengerid : this.props.id, leg: data.title, descr: data.val})
    }

    clickedFare(data)
    {
        console.log('Passenger  compo ');
        console.log(data);

        this.props.updateListWithFare(data);
    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} Type </div>
                    <div className="panel-body">


                        <Names   papid={this.props.id}
                                 updateNames={this.props.updateNames}/>



                        <BaggageList bagInfo={this.props.bagInfo} callback={this.getSelectedBags}/>
                        <InsurancePanel/>

                        <UpgradeFare
                            papid={this.props.id}
                            fareInfo={this.props.fareInfo}
                            clickedFare={this.clickedFare}/>

                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;