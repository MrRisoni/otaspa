import React, {Component} from 'react';
import {inject} from "mobx-react/index";
import moment from "moment/moment";

@inject('MasterStore')
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            mail: '',
            mobile: ''
        };

        this.editSurname = this.editSurname.bind(this);
        this.editName = this.editName.bind(this);
        this.editMobile = this.editMobile.bind(this);
        this.editMail = this.editMail.bind(this);


    }
    editSurname(ev)
    {
        const fieldInput = ev.target.value.toUpperCase();
        this.setState({surname: fieldInput});
    }

    editName(ev)
    {
        const fieldInput = ev.target.value.toUpperCase();
        this.setState({name: fieldInput});
    }

    editMail(ev)
    {
        const fieldInput = ev.target.value.toUpperCase();
        this.setState({mail: fieldInput});
    }


    editMobile(ev)
    {
        const fieldInput = ev.target.value.toUpperCase();
        this.setState({mobile: fieldInput});
    }


    componentDidMount()
    {
        this.setState({
            surname: this.props.MasterStore.otaStore.contactInfo.surname
        })
    }


    render() {
        return (

            <div className="row contactDetails">
                <div className="col-md-12">

                    <div className="card">
                        <div className="card-header bg-primary">Contact Details</div>
                        <div className="card-body">


                            <div className="row">

                                <div className="col-md-2">
                                    <select className="form-control">
                                        <option></option>
                                        <option value="MR">Male</option>
                                        <option value="MS">Female</option>
                                    </select>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Surname"
                                           value={this.state.surname}
                                           onChange={this.editSurname}
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Name"
                                           value={this.state.name}
                                           onChange={this.editName}
                                           className="form-control"/>
                                </div>


                            </div>


                            <br/>


                            <div className="row">

                                <div className="col-md-2">
                                    <input type="text" placeholder="Prefix"
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Mobile"
                                           value={this.state.mobile}
                                           onChange={this.editMobile}
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Email"
                                           value={this.state.mail}
                                           onChange={this.editMail}
                                           className="form-control"/>
                                </div>


                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-md-5">
                                    <select className="form-control">
                                        <option>Select Country</option>
                                        <option value="GR">Greece</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="City"
                                           className="form-control"/>
                                </div>


                            </div>


                            <br/>


                            <div className="row">

                                <div className="col-md-5">
                                    <input type="text" placeholder="Address"
                                           className="form-control"/>
                                </div>


                                <div className="col-md-4">
                                    <input type="text" placeholder="Post code"
                                           className="form-control"/>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>

            </div>)
    }
}

export default Contact;