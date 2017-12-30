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

    for (i = 0; i < props.data.rows.length; i++)
    {
        let item = props.data.rows[i];
        rows.push(<tr key={reactKey}>
            <td>{item.title}</td>
            <td>{item.value}</td>
        </tr>);
        reactKey++;
    }


    return (
        <div className="card FinalCardTable">
            <div className="card-header">{props.data.title}</div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default CardTable;
