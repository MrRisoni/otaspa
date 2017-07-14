import React, {Component}  from 'react';


class Home extends Component {

    render() {

        const products = [
            [{
                id: 0,
                title: "Air"
            },
                {
                    id: 1,
                    title: "Hotel"
                }],
            [{
                id: 2,
                title: "Ship"
            },
                {
                    id: 3,
                    title: "Car"
                }]
        ];

        return (<div>

            {products.map((product_pair, index) => {

                return (<div className="row">

                    <div key={product_pair[0].id} className="col-md-6">
                        <div className="jumbotron">
                            <h1> <a href={ '#/' +  product_pair[0].title.toLocaleLowerCase()} >{product_pair[0].title}</a></h1>
                        </div>
                    </div>


                    <div key={product_pair[1].id} className="col-md-6">
                        <div className="jumbotron">
                            <h1> <a href={ '#/' +  product_pair[1].title.toLocaleLowerCase()} >{product_pair[1].title}</a></h1>
                        </div>
                    </div>


                </div>);
            })}

        </div>);
    }
}


export default Home;