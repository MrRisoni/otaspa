import React, {Component} from 'react';

import './login.css';


class Login extends Component {


    render() {

        const loginMethods = [
            [{
                key: 'ticket',
                title: 'Ticket number',
                img: ''
            },
                {
                    key: 'account',
                    title: 'Account',
                    img: ''
                }],
            [{
                key: 'google',
                title: 'Google',
                img: ''
            },
                {
                    key: 'linkedin',
                    title: 'Linkedin',
                    img: ''
                }],

        ]
        return (

<div>

                <div className="row">


                    <div className="col-md-2"></div>

                    <div className="col-md-8">

                        {loginMethods.map((logrow) => {
                            return (   <div className="row loginrow">
                                {logrow.map((logmethod) => {
                                    return (<div className="col-md-6" key={logmethod.key}>


                                        <div className="card bg-info">

                                            <div className="card-body">

                                                <input type="radio" value={logmethod.key}/>

                                                {logmethod.title}

                                            </div>

                                        </div>

                                    </div>)
                                })}
                            </div> )
                        })}

                    </div>
                </div>


                <div className="row loginform">

                    <div className="col-md-4"></div>

                    <div className="col-md-4">

                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>


</div>

        );
    }
}

export default Login;


