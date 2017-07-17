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
            results: {},
            fetched: false,
            searched: false
        };

        this.searchClicked = this.searchClicked.bind(this);
    }

    searchClicked() {
        console.log('Mounting');
        console.log(this.props.params);

        var self = this;

        self.setState({searched: true});


        // just a dummy waiting time
        // click button search
        setTimeout(function () {

            console.log('AirSearch');
            let fake = new FakeServer(self.props.params.product);

            self.setState({results: fake.AirSearch()});
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
                    <SearchBar searchHandler={this.searchClicked}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <Filters product={this.props.params.product}/>
                </div>

                {this.state.fetched ?
                    (<div className="col-md-10">
                        <ResultsList results={this.state.results}
                                     filters={this.state.filters}
                                     product={this.props.params.product}/>
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