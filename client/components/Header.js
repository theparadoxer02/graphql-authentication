import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import { Link } from 'react-router';

class Header extends Component {
    renderButtons() {

        const { loading, user } = this.props.data;

        if (loading) { return <div />; }

        if(user) {
            return <div> Hi { user.id } Logout </div>;
        } else {
            return (
                <div>
                    <li>
                        <Link to="/singup"> SignUp</Link>
                    </li>
                    <li>
                        <Link to="/login"> Login</Link>
                    </li>
                </div>
            );
        }
    };

    render() {        
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        HOME
                    </Link>
                    <ul className="right">
                        { this.renderButtons() }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(CurrentUser)(Header);