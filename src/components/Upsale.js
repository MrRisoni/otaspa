import React, {Component} from 'react';


class Upsale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            price: this.props.price
        };


        this.localHandler = this.localHandler.bind(this);
    }

    localHandler() {
        if (this.state.selected) {
            this.setState({selected: false});
        }
        else {
            this.setState({selected: true});
        }

        this.props.clickedUpsale({id: this.props.obj.id, title: this.props.obj.title, selected: this.state.selected});
    }

    render() {
        const {isChecked} = this.state.selected;

        return (

            <div className="row">
                <div className="col-md-10">

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
