import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Breadcrumb, Container, Grid} from 'semantic-ui-react';
import ProductTag from "../products/ProductTag";

export class Home extends Component {
    render() {
        const sections = [
            {key: 'Home', content: 'Home', active: true},
        ];

        let products = [
            {
                "price": "Ksh. 17,000",
                "image": process.env.PUBLIC_URL + '/img/air jordan 11 retro.jpg'
            },
            {
                "price": "Ksh. 14,000",
                "image": process.env.PUBLIC_URL + '/img/air jordan 6 retro.jpg'
            },
            {
                "price": "Ksh. 11,000",
                "image": process.env.PUBLIC_URL + '/img/air jordan 4 retro.jpg'
            }
        ];

        return (
            <div>
                <Container className="page_content">
                    <Breadcrumb icon="right angle" sections={sections}/>

                    <h2>Recommended Products</h2>

                    <Grid stackable columns={3}>
                        {_.map(products, product =>
                            <Grid.Column key={product.price}>
                                <ProductTag
                                    price={product.price}
                                    image={product.image}/>
                            </Grid.Column>
                        )}
                    </Grid>

                    <h2 className="section_header">Featured Products</h2>

                    <Grid stackable columns={3}>
                        {_.map(products, product =>
                            <Grid.Column key={product.price + 1}>
                                <ProductTag
                                    price={product.price}
                                    image={product.image}/>
                            </Grid.Column>
                        )}
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Validate propTypes
Home.propTypes = {

};

export default connect(null, null)(Home);
