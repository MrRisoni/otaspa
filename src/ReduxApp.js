import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';


import Itinerary from './containers/Trip/Itinerary';
import UpsaleList from './containers/UpsaleList';
import PriceBox from './containers/PriceBox';


class ReduxApp extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
           <div>
               <div className="row">

                   <div className="col-md-10">


                       <Itinerary/>


                       <PassengerList />


                       {/*  while loading display spinner  */}
                           <FontAwesome
                               className='fa-spinner'
                               name='spinner'
                               size='4x'
                               spin
                               style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                           />


                       <UpsaleList/>


                   </div>


                   <div className="col-md-2 ">
                       <PriceBox/>
                   </div>

               </div>

            </div>
        );
    }
}


export default  ReduxApp

