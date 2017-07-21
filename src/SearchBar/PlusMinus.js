import React, {Component}  from 'react';

class PlusMinus extends Component {
    constructor(props)
    {
        super(props);

        this.increasePap = this.increasePap.bind(this);
        this.decreasePap = this.decreasePap.bind(this);
    }


    increasePap()
    {
        console.log('increase pap');

        this.props.updateAmountPassengers({type: this.props.papCode , sign : 1 });
    }


    decreasePap()
    {
        console.log('decrease pap');

        this.props.updateAmountPassengers({type: this.props.papCode , sign : -1 });
    }

    render()
    {
        return (<div className="col-md-4">

            {this.props.passengerType}


            {this.props.number}

            <div className="btn-group">
                <button type="button" className="btn btn-xs btn-primary" onClick={this.increasePap}>
                    <span className="glyphicon glyphicon-plus"></span>
                </button>

                <button type="button" className="btn btn-xs btn-primary" onClick={this.decreasePap}>
                    <span className="glyphicon glyphicon-minus"></span>
                </button>
            </div>





        </div>);
    }
}


export default PlusMinus;