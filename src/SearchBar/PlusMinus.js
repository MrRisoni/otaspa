import React, {Component}  from 'react';

class PlusMinus extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            number : 0
        }
    }
    render()
    {
        return (<div className="col-md-4">

            {this.props.passengerType}

            {this.state.number}

            <div className="btn-group">
                <button type="button" className="btn btn-xs btn-primary">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>

                <button type="button" className="btn btn-xs btn-primary">
                    <span className="glyphicon glyphicon-minus"></span>
                </button>
            </div>





        </div>);
    }
}


export default PlusMinus;