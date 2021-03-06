import React, { Component } from 'react';
import AuthForm from './AuthForm'
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        // this.props;  // old props
        // nextProps;  // next props that will be in place when
        //component rerenders

        if (!this.props.data.user && nextProps.data.user) {
            // redirect user to dashboard
            hashHistory.push('/dashboard');
        }
    }

    handleSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
            console.log(this.state.errors);
        });
    
    }

    render() {
        return (
            <div>
                <h3> Login </h3>
                <AuthForm
                    errors={this.state.errors}
                    handleSubmit={this.handleSubmit.bind(this)}
                />
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(LoginForm)
);