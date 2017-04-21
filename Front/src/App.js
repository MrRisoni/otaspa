import React, {Component} from 'react';
import axios from 'axios';

import PriceBox from './components/PriceBox';
import UpsaleList from "./containers/UpsaleList";
import FontAwesome from 'react-fontawesome';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingUpsales :0,
            totalPrice : 0,
            pricing: {
                total: 0
            },
            upsales: [
                {
                    id: 1,
                    title: 'SMS',
                    price: 1,
                    selected: false
                }, {
                    id: 2,
                    title: 'Web Check-in',
                    price: 6,
                    selected: false
                }, {
                    id: 3,
                    title: 'Hotel Room',
                    price: 10,
                    selected: false
                }, {
                    id: 4,
                    title: 'Rent a Car',
                    price: 30,
                    selected: false
                }, {
                    id: 5,
                    title: 'Pet in Cabin',
                    price: 25,
                    selected: false
                }, {
                    id: 6,
                    title: 'Risotto a frutti di mare',
                    price: 15,
                    selected: false
                }, {
                    id: 7,
                    title: 'a glass of red wine',
                    price: 12,
                    selected: false
                },{
                    id: 8,
                    title: 'Chocolate Dessert',
                    price: 7,
                    selected: false
                }
            ]

        };

        this.handleUpsales = this.handleUpsales.bind(this);
    }

    componentDidMount()
    {
        var self = this;
        console.log('Mount Component');

        axios.get(this.props.apiURL + '/upsales').then(function(response)
        {
            console.log(response.data);
            var upsales = [];
            response.data.forEach(function(obj, index) {
                obj.selected = false;
                obj.price = parseFloat(obj.price);
                upsales.push(obj);
        });

            self.setState({upsales:upsales});
            self.setState({loadingUpsales:1});

        }).catch(function (error) {
            console.log(error);
        });


    }
    handleUpsales(upsale_id, checked) {
        var self = this;
        console.log('App Component Bought ' + upsale_id + ' is ' + checked);

        let upsalesNew = this.state.upsales;
        for (let i = 0; i < upsalesNew.length; i++) {
            if (upsalesNew[i].id == upsale_id) {
                console.log('Price of upsale ' + upsalesNew[i].price);
                upsalesNew[i].selected = true;
                let pricingNew = this.state.totalPrice;
                if (checked) {
                    pricingNew += upsalesNew[i].price;
                }
                else {
                    pricingNew -= upsalesNew[i].price;
                }

                console.log(pricingNew);
                self.setState({totalPrice : pricingNew});
                self.setState({upsales: upsalesNew});

            }
        }
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-10">

                    {/* start panel */}
                    <div className="row">
                        <div className="col-md-10">

                            <div className="panel panel-default">
                                <div className="panel-body">Panel Content</div>
                                <div className="panel-footer">Panel Footer</div>
                            </div>
                        </div>
                    </div>
                    {/* end panel */}

                    {/*  while loading display spinner  */}
                    { (this.state.loadingUpsales == 0) ?
                        <FontAwesome
                            className='fa-spinner'
                            name='spinner'
                            size='4x'
                            spin
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                        : '' }

                    <UpsaleList AppHandler={this.handleUpsales} upsales={this.state.upsales}/>


                </div>


                <div className="col-md-2 ">
                    <PriceBox total={this.state.totalPrice} upsales={this.state.upsales}/>
                </div>

            </div>
        );
    }
}

export default App;
