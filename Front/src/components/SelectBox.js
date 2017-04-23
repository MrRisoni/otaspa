import React, {Component} from 'react';

class SelectBox extends Component
{
    constructor(props)
    {
        super(props);

        this.localHandler = this.localHandler.bind(this);
    }

    localHandler(event)
    {
        console.log('Local Change Handler '  + event.target.value );
        this.props.changeHandler(event.target.value);
    }
    render()
    {

        var optionsHTML =[];
        // pass either the id or the title as value
        for (var i=0; i < this.props.optionsList.length; i++) {
            var val = (this.props.idAsValue) ? this.props.optionsList[i].id : this.props.optionsList[i].title;
           optionsHTML.push(<option key={this.props.optionsList[i].id} value={val}>{this.props.optionsList[i].title}</option>);
        }

        return (

            <div className={`form-group ${ this.props.classColSize }`}>

                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                    <option></option>
                    {optionsHTML}
                </select>
            </div>
        )
    }

}

export default SelectBox;