import React, {Component} from 'react';


class Insurance extends  Component
{
    render()
    {
        return(<div>Insurance From

            <input type="radio" value="option1" checked={true} />
            <input type="radio" value="option2" checked={true} />
            <input type="radio" value="option3" checked={true} />
        </div>);
    }
}


export default Insurance;