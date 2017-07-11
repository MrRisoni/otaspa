import React, {Component} from 'react';


class InsuranceBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localid : 0
        };
        this.localChange = this.localChange.bind(this);
    }

    localChange(event) {
        console.log(event.target.value);
        this.props.updateParentHandler(event.target.value);
    }


    componentDidMount()
    {
        var self = this;
        self.setState({localid : this.props.data.id});

    }
    render() {

        console.log(this.props);
        console.log(this.props.data);




        return (<div className="col-md-3">

            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <p> {this.props.data.title} </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            {this.props.data.price}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <input type="radio"
                                   value={this.props.data.id}
                                   checked={this.props.selected === this.state.localid}
                                   onChange={this.localChange}
                                   />
                        </div>
                    </div>


                </div>
            </div>
        </div>);
    }
}


export default InsuranceBox;