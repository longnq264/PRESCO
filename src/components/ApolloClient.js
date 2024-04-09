import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = () => {
  return new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });
};

export default client;
