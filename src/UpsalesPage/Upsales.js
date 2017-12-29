import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import PriceBox from '../Booking/SideBar';
import Preseat from './Preseat/Preseat';

@inject('htmlStore')
@observer
class Upsales extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

    }
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight + window.pageYOffset;
        this.props.htmlStore.changeHeight( windowBottom);

    }

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (

            <div className="row">

               <div className="col-md-7 offset-md-1">
                    <Preseat/>

                </div>

                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>
        )
    }
}

export default Upsales;