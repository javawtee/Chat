import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import apolloClient from 'apolloSrc/client';
import store from 'reduxSrc/store';
import PropTypes from 'prop-types';

const Provider = App => {
  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  )
};

Provider.proptypes = {
  App: PropTypes.element.isRequired
}

export default Provider;
