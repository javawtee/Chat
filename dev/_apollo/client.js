import ApolloClient from 'apollo-boost';
import env from 'utils/env';

const client = new ApolloClient({
  uri: env.SERVER_ENDPOINT
})

export default client;