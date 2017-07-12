import React, {Component} from 'react';


class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: ''
        };
        this.changeName = this.changeName.bind(this);
        this.changeSurName = this.changeSurName.bind(this);

    }

     changeName(event) {
        let self = this;
        self.setState({name: event.target.value});
        this.props.updateNames({id: this.props.papid, name: self.state.name, surname: self.state.surname});
    }


    changeSurName(event) {
        let self = this;
        self.setState({surname: event.target.value});
        this.props.updateNames({id: this.props.papid, name: self.state.name, surname: self.state.surname});

    }

    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="panel panel-default">
                    <div className="panel-heading">Fill in your name</div>
                    <div className="panel-body">

                        <div className="row">

                            <div className="col-md-2">
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>


                            <div className="col-md-5">
                                <input type="text" value={this.state.surname} placeholder="Surname"
                                       onChange={this.changeSurName} className="form-control"/>
                            </div>


                            <div className="col-md-5">
                                <input type="text" value={this.state.name} placeholder="Name" onChange={this.changeName}
                                       className="form-control"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>);
    }
}


export default Names;