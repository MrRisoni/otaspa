import React, {Component}  from 'react';

import Result from './Result';

class ResultsList extends Component {
    constructor(props){
        super(props);

        this.isFiltered = this.isFiltered.bind(this);
    }

    isFiltered()
    {
        return false;
    }
    render() {
        console.log('ResultList Component');
        console.log(this.props.results);

        return (<div>

            {this.props.results.map( function (res) {
                return ( <Result data={res}/>)
            })}

        </div>)
    }
}

export default ResultsList;
