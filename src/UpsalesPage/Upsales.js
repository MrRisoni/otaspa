import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import SideBar from '../Booking/SideBar';
import Preseat from './Preseat/Preseat';

@inject('routing')
@inject('otastore')
@observer
class Upsales extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.moveToPay = this.moveToPay.bind(this);


    }
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight + window.pageYOffset;
        this.props.otastore.changeHeight( windowBottom);
    }

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    moveToPay()
    {
        const { location, push, goBack } = this.props.routing;
        push('/pay');
    }

    render() {
        return (

            <div className="row">

               <div className="col-md-7 offset-md-1">
                    <Preseat/>

                   <div className="row">
                       <div className="col-md-4">
                       </div>
                       <div className="col-md-4">
                           <button className="btn btn-success btn-lg" onClick={this.moveToPay}>Continue
                           </button>
                       </div>
                   </div>

                </div>

                <div className="col-md-4">
                    <SideBar/>
                </div>
            </div>
        )
    }
}

export default Upsales;