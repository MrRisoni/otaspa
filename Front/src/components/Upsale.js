import React, {Component} from 'react';


class Upsale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            price: this.props.price
        };


        this.localHandler = this.localHandler.bind(this);
    }

    localHandler()
    {
      //  console.log('local handler ' + this.props.obj.id);
        this.props.parentHandler(this.props.obj.id);
    }

    render() {
        const { isChecked } = this.state.selected;

        return (

            <div className="row">
                <div className="col-md-8">




                    <div className="checkbox">
                        <label>
                            <input
                                id={this.props.obj.id}
                                name={this.props.obj.title}
                                type="checkbox"
                                value={this.props.obj.id}
                                checked={isChecked}
                                onChange={this.localHandler}/>

                            {this.props.obj.title} {this.props.obj.price}
                        </label>
                    </div>



                </div>

            </div>)
    }
}


export default Upsale;