import React from 'react';

const CardTable = function (props) {
    console.log(props);

    let rows = [];

    let reactKey = 0;
    let headers = [];
    for (var i = 0; i < props.data.headers.length; i++)
    {
        headers.push(<th key={i}>{props.data.headers[i]}</th>)
    }

    for (var i = 0; i < props.data.rows.length; i++)
    {

    }

   /* for(let variable in props.data) {

        let  context = "";

        rows.push(<tr className={context} key={reactKey}>
            <td>{property}</td>
            <td>{props.data[property]}</td>
        </tr>);
        reactKey++;
    } */

    return (
        <div className="card">
            <div className="card-header">{props.data.title}</div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default CardTable;
