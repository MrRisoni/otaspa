import React, {Component} from 'react';


class Upsale extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selected : false,
            price : this.props.price
        }
    }
    render()
    {
        return(<div>


            <div className="checkbox">
                <label> {this.props.title} {this.props.price}

                    <input
                        name={this.props.title}
                        type="checkbox"
                        checked={this.props.selected}
                        onChange={this.props.handler} />
                </label>

            </div>

        </div>)
    }
}


export default Upsale;