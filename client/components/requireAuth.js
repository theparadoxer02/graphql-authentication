import React, { Component } from 'react';
import Route from 'react-router';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class RequieAuth extends Component {
    componentDidMount() {
        if(!this.props.data.loading && !this.props.data.user) {
            hashHistory.push('/login');
        }
    }
}

export default graphql(CurrentUser)(RequieAuth);