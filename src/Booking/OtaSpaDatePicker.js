import React, {Component} from 'react';

import './OtaSpaDatePicker.css'
import moment from 'moment';
import FontAwesome from 'react-fontawesome';


class OtaSpaDatePicker extends Component {
    constructor(props)
    {
        super(props);


    }

    render() {
        return (



            <div className="otaspaDatePicker">

                <div className="row">
                    <div className="col-md-4">
                        <FontAwesome
                            className='fa fa-backward'
                            name='backward'
                            size='1x'
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                    </div>
                    <div className="col-md-4">
                        2017
                    </div>
                    <div className="col-md-4">
                        <FontAwesome
                            className='fa fa-forward'
                            name='fa-forward'
                            size='1x'
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1">
                            S
                    </div>
                    <div className="col-md-1">
                        M
                    </div>
                    <div className="col-md-1">
                        S
                    </div>
                    <div className="col-md-1">
                        M
                    </div>
                    <div className="col-md-1">
                        S
                    </div>
                    <div className="col-md-1">
                        M
                    </div>
                    <div className="col-md-1">
                        M
                    </div>
                </div>

                Component DatePicker



            </div>

        );
    }
}

export default OtaSpaDatePicker;


