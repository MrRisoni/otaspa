import React, {Component}  from 'react';

import SearchBar from '../SearchBar/SearchBar';
import  Filters from './Filters';
import  ResultsList from './ResultsList';
import FontAwesome from 'react-fontawesome';


import  FakeServer from './../server_funcs';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                price: {}
            },
            orderBy: {
                price: 'asc',
                stars: 'desc',
                wait: 'asc',
                duration : 'asc'
            },
            numPassengers: { adults: 1, children: 0, infants :0},
            results: {},
            fetched: false,
            searched: false
        };

        this.searchClicked = this.searchClicked.bind(this);
        this.updateSortingFromSearchBar = this.updateSortingFromSearchBar.bind(this);
        this.fetchFilters =  this.fetchFilters.bind(this);
        this.updateAmountPassengers = this.updateAmountPassengers.bind(this);
    }


    updateAmountPassengers(data)
    {
        console.log('update amount passengers');
        console.log(data);
        var self = this;
        let num_paps = this.state.numPassengers;

        let papType = '';
        switch (data.type) {
            case 'ADT':
                papType = 'adults';
                break;
            case 'CNN':
                papType = 'children';
                break;
            case 'INF':
                papType = 'infants';
                break;
        }

        if (data.sign >0) {
            num_paps[papType]++;
        }
        else {
            num_paps[papType]--;
            if (num_paps[papType] <0) {
                num_paps[papType]=0;
                if (data.type === 'ADT') {
                    num_paps[papType]=1;
                }
            }
        }


        self.setState({numPassengers : num_paps});
    }


    fetchFilters(data)
    {
        console.log('Search Page Compo');
        console.log(data);
        var self = this;

        let filters = self.state.filters;
        filters[data.attribute] = data.minmax;

        self.setState({filters : filters});
    }

    updateSortingFromSearchBar(data)
    {
        console.log('Search Page. Received');
        console.log(data);

        var self = this;

        let order_by = self.state.orderBy;

        order_by = data;

        self.setState({ orderBy : order_by});
    }


    searchClicked() {
        console.log('Mounting');
        console.log(this.props.params);

        var self = this;

        self.setState({searched: true});


        // just a dummy waiting time
        // click button search
        setTimeout(function () {

            let fake = new FakeServer(self.props.params.product);

            self.setState({results: fake.getResults()});
            self.setState({fetched: true});

        }, 450);
    }

    render() {

        console.log('Rendering');

        console.log(this.props.params);
        console.log(this.state.results);
        console.log(this.state.fetched);


        return (<div>

            <div className="row">

                <div className="col-md-12">
                    <SearchBar searchHandler={this.searchClicked}
                               product={this.props.params.product}
                               updateSearchPageCompo={this.updateSortingFromSearchBar}
                               numPassengers={this.state.numPassengers}
                               updateAmountPassengers={this.updateAmountPassengers}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    {/*
                    <Filters product={this.props.params.product}
                             liftUpFilters={this.fetchFilters}/> */}
                </div>

                {this.state.fetched ?
                    (<div className="col-md-10">
                        <ResultsList results={this.state.results}
                                     product={this.props.params.product}
                                     orderBy={this.state.orderBy}/>
                    </div>) :
                    (<div>


                        {this.state.searched ?
                            (<div className="col-md-10">

                                <FontAwesome
                                    className='fa fa-spinner fa-spin'
                                    name='spinner'
                                    size='5x'
                                    spin
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                />

                            </div>) : (<div></div>)
                        }

                    </div>)
                }

            </div>
        </div>)
    }
}

export default SearchPage;