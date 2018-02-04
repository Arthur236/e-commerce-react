import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Grid, Image, Label, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Navigation from "../common/Navigation";

export class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>

                <Container className="content">
                    <h2>Featured Products</h2>

                    <Grid stackable columns={3}>
                        <Grid.Column>
                            <Segment id="product_segment">
                                <Label floating id="price_tag">Ksh. 17,000</Label>
                                <Image src={process.env.PUBLIC_URL + '/img/air jordan 11 retro.jpg'}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment id="product_segment">
                                <Label floating id="price_tag">Ksh. 14,000</Label>
                                <Image src={process.env.PUBLIC_URL + '/img/air jordan 6 retro.jpg'}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment id="product_segment">
                                <Label floating id="price_tag">Ksh. 11,000</Label>
                                <Image src={process.env.PUBLIC_URL + '/img/air jordan 11 retro.jpg'}/>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Home;
