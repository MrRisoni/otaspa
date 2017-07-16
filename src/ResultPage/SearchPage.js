import React, {Component}  from 'react';

import SearchBar from '../SearchBar/SearchBar';
import  Filters from './Filters';
import  ResultsList from './ResultsList';

class SearchPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            filters : {
                price : {}
            }
        }
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
                    <ResultsList/>
                </div>
            </div>
        </div>)
    }
}

export default SearchPage;