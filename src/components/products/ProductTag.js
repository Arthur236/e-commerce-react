import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Image, Label, Segment} from 'semantic-ui-react';
import {Home} from "../home/Home";

const ProductTag = ({price, image}) => {
    return (
        <Segment id="product_segment">
            <Image src={image}/>
            <Label floating id="price_tag">{price}</Label>
        </Segment>
    );
};

// Validate propTypes
ProductTag.propTypes = {
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default ProductTag;
