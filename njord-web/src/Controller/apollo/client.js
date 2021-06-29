import { ApolloClient } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  ssrMode: true,

  link: createHttpLink({
    uri: process.env.WORDPRESS_LOCAL_SITE_URL,
    credentials: 'same-origin'
  }),

  cache: new InMemoryCache(),
});

export default client;