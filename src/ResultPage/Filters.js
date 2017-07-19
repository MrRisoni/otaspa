import React, {Component}  from 'react';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

class Filters extends Component {
    constructor(props)
    {
        super(props);

        this.log = this.log.bind(this);

        this.filterPrice = this.filterPrice.bind(this);
    }

    filterPrice(ranges)
    {
        console.log('filter price');
        console.log(ranges);
       // this.props.liftUpFilters({ attribute : 'price' , minmax : ranges});
    }


    log(value) {
    console.log(value); //eslint-disable-line
}

    render() {

        // http://react-component.github.io/slider/examples/marks.html
        const marks = {
            '-10': '-10°C',
            0: <strong>0°C</strong>,
            26: '26°C',
            37: '37°C',
            50: '1950°C'
        };



        return (<div>Filters

            duration
            stops
            wait time
            stars


            price

            <Slider.Range min={-10} marks={marks} onChange={this.filterPrice} defaultValue={[20, 40]} />

            <br/>
            <br/>

            duration
            <Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />

            <br/>
            <br/>

            wait time
            <Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />


            <br/>
            <br/>

            stops
            <Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />

            <br/>

        </div>)
    }
}

export default Filters;