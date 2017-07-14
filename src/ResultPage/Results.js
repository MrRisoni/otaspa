import React, {Component}  from 'react';

import SearchBar from '../SearchBar';

class Results extends Component {

    render() {

        console.log(this.props.params);


        return (<div>

            <div className="row">

                <div className="col-md-12">
                    <SearchBar/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    Results
                </div>
            </div>
        </div>)
    }
}

export default Results;