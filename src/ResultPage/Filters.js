import React, {Component}  from 'react';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

class Filters extends Component {


    render() {




        return (<div>Filters

            price
            duration
            stops
            wait time
            stars

            <Slider />

        </div>)
    }
}

export default Filters;