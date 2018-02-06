import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Container, Icon, Input, Label, Menu} from 'semantic-ui-react';

const Navigation = ({history}) => {
    const pathname = history.location.pathname;

    return (
        <Container>
            <Menu secondary stackable>
                <Menu.Menu position="left">
                    <h1 className="banner">eCommerce</h1>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Input icon="search" placeholder="Search..."/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon.Group size="large">
                            <Icon name="shop"/>
                            <Label size="mini" circular floating>2</Label>
                        </Icon.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu secondary stackable>
                <Menu.Menu position="right">
                    <Link to="/" className={pathname === '/' ? "active item" : "item"}>Home</Link>
                    <Link to="/" className={pathname === '/about' ? "active item" : "item"}>About</Link>
                    <Link to="/" className={pathname === '/contact' ? "active item" : "item"}>Contact</Link>
                    <Link to="/register" className={pathname === '/register' ? "active item" : "item"}>Register</Link>
                    <Link to="/" className={pathname === '/logout' ? "active item" : "item"}>Logout</Link>
                </Menu.Menu>
            </Menu>
        </Container>
    );
};

// Validate propTypes
Navigation.propTypes = {
    history: PropTypes.object
};

export default Navigation;
