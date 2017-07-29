import React, {Component} from 'react';


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
            }]
        ];

        return (<div>

            {products.map((product_pair, index) => {

                return (<div className="row">

                    {product_pair.map((single_product, index) => {

                        return (
                            <div key={single_product.id} className="col-md-6">
                                <div className="jumbotron">
                                    <h1><a
                                        href={'#/search/' + single_product.title.toLocaleLowerCase()}>{single_product.title}</a>
                                    </h1>
                                </div>
                            </div>);
                    })}


                </div>);
            })}

        </div>);
    }
}


export default Home;