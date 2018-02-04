import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Icon, Input, Label, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Navigation extends Component {
    state = {activeItem: 'common'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Container>
                <Menu secondary>
                    <Menu.Menu position="left">
                        <h1 className="banner">eCommerce</h1>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Input icon="search" placeholder="Search..."/>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon.Group size='large'>
                                <Icon name='shop'/>
                                <Label size="mini" circular floating>2</Label>
                            </Icon.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu secondary>
                    <Menu.Menu position="right">
                        <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick}/>
                        <Menu.Item name="about" active={activeItem === "about"} onClick={this.handleItemClick}/>
                        <Menu.Item name="contact" active={activeItem === "contact"} onClick={this.handleItemClick}/>
                        <Menu.Item name='logout' active={activeItem === "logout"} onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu>
            </Container>
        );
    }
}

export default Navigation;
