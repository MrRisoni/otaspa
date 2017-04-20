import React, {Component} from 'react';


class Upsale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            price: this.props.price
        }
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-8">


                    <input
                        id={this.props.obj.title}
                        name={this.props.obj.title}
                        type="checkbox"
                        checked={this.props.obj.selected}
                        onChange={this.props.handler}/>

                    {this.props.obj.title} {this.props.obj.price}


                </div>

            </div>)
    }
}


export default Upsale;