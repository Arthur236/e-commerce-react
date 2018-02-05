import React, {Component} from 'react';
import {Image, Label, Segment} from 'semantic-ui-react';

const ProductTag = ({price, image}) => {
    return (
        <Segment id="product_segment">
            <Image src={image}/>
            <Label floating id="price_tag">{price}</Label>
        </Segment>
    );
};

export default ProductTag;
