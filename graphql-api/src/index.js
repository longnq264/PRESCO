import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import cors from "cors";

//creating web server api, using apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
  },
});

//port
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// node index.js
