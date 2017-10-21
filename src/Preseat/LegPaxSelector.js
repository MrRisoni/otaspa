import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
@observer
class LegPaxSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paxIX: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext()
    {

    }

    handlePrev()
    {

    }


    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header  bg-primary">Select Leg</div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row preSeatPaxSelector">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header  bg-primary">Select Passenger</div>
                            <div className="card-body">





                                <button className="btn btn-sm btn-success" onClick={this.handleNext}>
                                    <FontAwesome
                                        className='fa fa-forward'
                                        name='forward'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                    />
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LegPaxSelector;


