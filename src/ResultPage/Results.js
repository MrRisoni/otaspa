import React, {Component}  from 'react';

import SearchBar from '../SearchBar';

class Results extends Component {

    render() {

        console.log(this.props.params);


        return (<div>

            <SearchBar/>

            Results

        </div>)
    }
}

export default Results;