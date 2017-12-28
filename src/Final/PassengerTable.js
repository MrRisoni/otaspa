import React from 'react';

import TableRow from './TableRow';

const PassengerTable = function (props) {

    console.log(props.pnrData);

    return (
        <div className="passengerTable">

            <div className="card">

                <div className="card-header">
                    <div className="row">
                        <div className="col-md-4 airlinePNR">{props.pnrData.airlinePNR}</div>
                    </div>
                </div>


                <div className="card-body">


                    <div className="row">
                        <div className="col-md-12">

                              <table className="table table-bordered table-striped">
                                  <thead>
                                      <tr>
                                          <th>Surname</th>
                                          <th>Name</th>
                                          <th>Ticket</th>
                                          <th>Bags</th>
                                      </tr>
                                  </thead>
                                  <tbody>

                                      { props.pnrData.tickets.map(tkt => {
                                          return (
                                              <tr className="paxRow">
                                                  <td>{tkt.pax.surname}</td>
                                                  <td>{tkt.pax.name}</td>
                                                  <td>{tkt.ticket}</td>
                                                  <td>{tkt.bags.length}</td>
                                              </tr>
                                          )

                                    })}
                                  </tbody>

                                </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default PassengerTable;
