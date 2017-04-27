import React, {Component} from 'react';


class Carousel extends Component {
    constructor()
    {
        super();

        this.navLeft = this.navLeft.bind(this);
        this.navRight = this.navRight.bind(this);
        this.state = {
            id: 0
        }

    }
    navLeft()
    {
        console.log('right');
        let self = this;
        console.log('left');
        let id = self.state.id;
        id--;
        if (id <0){
            id =this.props.data.length-1;
        }
        self.setState({id:id});
    }
    navRight()
    {
        console.log('right');
        let self = this;
        console.log('left');
        let id = self.state.id;
        id++;
        if (id === this.props.data.length){
            id =0;
        }
        self.setState({id:id});

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-10">

                    <div className="panel panel-default">
                        <div className="panel-heading">{this.props.title}</div>
                        <div className="panel-body">

                            <div className="row">

                                <div className="col-md-2">
                                    <button type="button" onClick={this.navLeft} className="btn btn-default" aria-label="Left Align">
                                        <span className="glyphicon glyphicon-menu-left"></span>
                                    </button>
                                </div>


                                <div className="col-md-8">
                                    <img size="15%" src={this.props.url}/>
                                    {this.props.data[this.state.id].title}
                                    <p> {this.props.data[this.state.id].info}</p>
                                    {this.props.data[this.state.id].totalPrice}
                                </div>

                                <div className="col-md-2">
                                    <button type="button" onClick={this.navRight} className="btn btn-default" aria-label="Left Align">
                                        <span className="glyphicon glyphicon-menu-right"></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Carousel;

