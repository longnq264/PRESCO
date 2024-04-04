import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://dog.ceo/api/breeds/image/random",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
