import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const APIURL = 'https://api.studio.thegraph.com/query/48904/vlance_v3/version/latest';

export const tokensQuery = gql`
  query {
    verifiedGithubContributors {
      id
      contributor
      blockNumber
      blockTimestamp
    }
  }
`;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

client
  .query({
    query: tokensQuery,
  })
  .then(data => console.log('Subgraph data: ', data))
  .catch(err => {
    console.log('Error fetching data: ', err);
  });

export default client;
