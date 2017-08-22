import React, {Component} from 'react';


class PurchasedBags extends Component {

    render() {
        return (

            <div class="col-md-6">
                <div class="purchasedLeg">


                    <!-- shows what you have purchased -->
                    <div class="card">
                        <div class="card-header bg-info">{{route}}</div>

                        <div class="card-body">

                            <div v-for="bag in boughtBagsDepart">

                                <div class="row">

                                    <div class="col-md-10">

                                        <button type="button" class="btn mybtn btn-danger" @click="">
                                        -
                                    </button> {{bag.title}}  {{bag.carrier}}

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

    </div>





        );
    }
}

export default PurchasedBags;


