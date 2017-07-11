import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            surname:'',
            name:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeSurName = this.changeSurName.bind(this);


    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }




    changeName(event)
    {
        let self = this;
        console.log('changeName');
        self.setState({name: event.target.value});
        this.props.updateNames({ id: this.props.papid, name: self.state.name, surname : self.state.surname });
    }


    changeSurName(event)
    {
        let self = this;
        console.log('changeSurName');
        self.setState({surname: event.target.value});
        this.props.updateNames({ id: this.props.papid, name: self.state.name, surname : self.state.surname });

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



                            <div className="col-md-2">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>


                        <br/>

                        <div className="row">

                            <div className="col-md-6">
                                <input type="text"  value={this.state.surname} placeholder="Surname" onChange={this.changeSurName} className="form-control"/>
                            </div>


                            <div className="col-md-6">
                                <input type="text"  value={this.state.name} placeholder="Name" onChange={this.changeName} className="form-control"/>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>);
    }
}


export default Names;