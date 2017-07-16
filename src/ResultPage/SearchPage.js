import React, {Component}  from 'react';

import SearchBar from '../SearchBar/SearchBar';
import  Filters from './Filters';
import  ResultsList from './ResultsList';

import axios from 'axios';


class SearchPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            filters : {
                price : {}
            },
            results : {}
        }
    }

    componentDidMount()
    {
        var self = this;
        let  config = require('../config.json');
        let apiURL = config.remote;
        console.log(this.props.params);
        console.log(apiURL);

        axios.get(apiURL + 'air_search').then(function (response) {
           console.log(response.data);

           self.setState( {results : response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {

        console.log(this.props.params);


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

                <div className="col-md-9">
                    <ResultsList results={this.state.results}/>
                </div>
            </div>
        </div>)
    }
}

export default SearchPage;