import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-toast';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Container, Dropdown, Icon, Input, Label, Menu} from 'semantic-ui-react';
import {logout} from '../../actions/authActions';

export class Navigation extends Component {
    logout(e) {
        // Log out a user
        e.preventDefault();
        this.props.logout();
        notify.show('You were logged out successfully.', 'success');
    }

    render() {
        let {activeUser, loggedIn} = this.props;

        let homeLink = <NavLink exact to="/" className="item">Home</NavLink>;
        let aboutLink = <NavLink to="/about" className="item">About</NavLink>;
        let contactLink = <NavLink to="/contact" className="item">Contact</NavLink>;
        let registerLink = <NavLink to="/register" className="item">Register</NavLink>;
        let loginLink = <NavLink to="/login" className="item">Login</NavLink>;
        let profileLink = <Link to={"/profile/" + activeUser.username} id="dropdownLink">Profile</Link>;
        let storeLink = <Link to="/stores" id="dropdownLink">My Stores</Link>;
        let logoutLink = <a onClick={this.logout.bind(this)} id="dropdownLink">Sign Out</a>;

        const userLinks = (
            <Menu.Menu position="right">
                {homeLink}
                {aboutLink}
                {contactLink}
                <Dropdown item text={activeUser.username}>
                    <Dropdown.Menu>
                        <Dropdown.Item>{profileLink}</Dropdown.Item>
                        <Dropdown.Item>{logoutLink}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        );

        const merchantLinks = (
            <Menu.Menu position="right">
                {homeLink}
                {aboutLink}
                {contactLink}
                <Dropdown item text={activeUser.username}>
                    <Dropdown.Menu>
                        <Dropdown.Item>{profileLink}</Dropdown.Item>
                        <Dropdown.Item>{storeLink}</Dropdown.Item>
                        <Dropdown.Item>{logoutLink}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        );

        const guestLinks = (
            <Menu.Menu position="right">
                {homeLink}
                {aboutLink}
                {contactLink}
                {registerLink}
                {loginLink}
            </Menu.Menu>
        );

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
                    {loggedIn && activeUser.merchant ? merchantLinks : loggedIn && !activeUser.merchant ? userLinks : guestLinks}
                </Menu>
            </Container>
        );
    }
}

// Validate propTypes
Navigation.propTypes = {
    loading: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    activeUser: PropTypes.object.isRequired,
    logout: PropTypes.func,
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn,
        activeUser: state.auth.activeUser
    };
}

export default connect(mapStateToProps, {logout}, null, {pure: false})(Navigation);
