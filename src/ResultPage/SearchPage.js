import React, {Component}  from 'react';

import SearchBar from '../SearchBar/SearchBar';
import  Filters from './Filters';
import  ResultsList from './ResultsList';
import FontAwesome from 'react-fontawesome';


import  {AirSearch} from './../server_funcs';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                price: {}
            },
            results: {},
            fetched: false
        }
    }

    componentDidMount() {
        console.log('Mounting');
        var self = this;

        // just a dummy waiting time

        setTimeout( function () {

                console.log('AirSearch');
                self.setState({results: AirSearch()});
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
                    <SearchBar/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Filters/>
                </div>

                {this.state.fetched ?
                    (<div className="col-md-9">
                    <ResultsList results={this.state.results}
                                 filters={this.state.filters}/>
                </div>) : (<div className="col-md-9">

                        <FontAwesome
                            className='fa fa-spinner fa-spin'
                            name='spinner'
                            size='5x'
                            spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />

                    </div>)
                }

            </div>
        </div>)
    }
}

export default SearchPage;