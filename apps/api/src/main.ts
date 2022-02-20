import 'reflect-metadata'
import { createConnection } from 'typeorm'

import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'

import { typeDefs } from './typedefs'
import { resolvers } from './resolvers'

async function startServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await createConnection({
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "autoOffice",
    synchronize: true,
    dropSchema: true,
    logging: false,
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer(typeDefs, resolvers);
