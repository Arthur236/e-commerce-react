import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Container, Dropdown, Icon, Input, Label, Menu} from 'semantic-ui-react';
import {logout} from '../../actions/authActions';
import {showToast} from "../../utils/helpers";

export class Navigation extends Component {
    logout(e) {
        // Log out a user
        e.preventDefault();
        this.props.logout();
        showToast('success', 'You were logged out successfully.');
    }

    render() {
        const {pathname} = this.props.history.location;
        let {activeUser, loggedIn} = this.props;

        const homeLink = <Link to="/" className={pathname === '/' ? "active item" : "item"}>Home</Link>;
        const aboutLink = <Link to="/" className={pathname === '/about' ? "active item" : "item"}>About</Link>;
        const contactLink = <Link to="/" className={pathname === '/contact' ? "active item" : "item"}>Contact</Link>;
        const registerLink = <Link to="/register"
                                   className={pathname === '/register' ? "active item" : "item"}>Register</Link>;
        const loginLink = <Link to="/login"
                                className={pathname === '/login' ? "active item" : "item"}>Login</Link>;
        const profileLink = <Link to={"/profile/" + activeUser.username} id="dropdownLink">Profile</Link>;
        const storeLink = <Link to="/stores" id="dropdownLink">My Stores</Link>;
        const logoutLink = <a onClick={this.logout.bind(this)} id="dropdownLink">Sign Out</a>;

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
    history: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, {logout})(Navigation);
