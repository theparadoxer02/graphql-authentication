import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import CurrentUser from '../queries/CurrentUser';


class Header extends Component {
    render() {
        console.log(this.props.data);

        if( this.props.data.loading) return (<div> </div>);
        
        return (
            <div>
                Header
            </div>
        );
    }
}

export default graphql(CurrentUser)(Header);