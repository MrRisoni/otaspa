import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import PriceBox from '../Booking/SideBar';
import PassengerUpsaleList from './PassengerUpsaleList';

@inject('htmlStore')
@observer
class Upsales extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

    }
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        // console.log(windowHeight);
        // const body = document.body;
        // const html = document.documentElement;
        // const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        //console.log(windowBottom);

        this.props.htmlStore.changeHeight( windowBottom);

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);

    }
    render() {
        return (

            <div className="row">

                <div className="col-md-7 offset-md-1">
                    <PassengerUpsaleList/>

                </div>

                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>
        )
    }
}

export default Upsales;