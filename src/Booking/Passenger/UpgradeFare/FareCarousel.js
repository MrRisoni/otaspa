import React, {Component} from 'react';

import FontAwesome from 'react-fontawesome';


class FareCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0

        };

        this.nextItem = this.nextItem.bind(this);

    }

    nextItem()
    {

        var self = this;
        let idx = self.state.index;
        idx++;

        if (idx === this.props.data.options.length) {
            idx =0;
        }

        self.setState({index : idx});
   }

    render() {
        return (

            <div className="row fareCarousel">
                <div className="col-md-12">
                    <div className="card">

                        <div className="card-header">
                            {this.props.data.carrier}
                        </div>


                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-2">


                                    <button className="btn btn-sm">
                                        <FontAwesome
                                            className='fa fa-backward'
                                            name='backward'
                                            size='2x'
                                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                        />
                                    </button>


                                </div>

                                <div className="col-md-8">



                                    <div className="card">

                                        <div className="card-header">
                                            {this.props.data.options[this.state.index].name}

                                            {this.props.data.options[this.state.index].convertedPrice}

                                        </div>

                                        <div className="card-body">

                                            <p>Description</p>

                                            </div>

                                    </div>


                                </div>

                                <div className="col-md-2">

                                    <button className="btn btn-sm" onClick={this.nextItem}>
                                        <FontAwesome
                                            className='fa fa-forward'
                                            name='forward'
                                            size='2x'
                                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                        />
                                    </button>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default FareCarousel;


