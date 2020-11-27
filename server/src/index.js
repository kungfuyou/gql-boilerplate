require('dotenv').config();

const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt =  require('jsonwebtoken');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');
const { JWT_SECRET } = process.env;

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    User: models.userModel
  }),
  context: ({ req, res }) => {
    const token = req.cookies['jwt'] || '';
    const user = token 
      ? jwt.verify(token, JWT_SECRET)
      : null;
    
    return {req, res, user};
  },
  cors: false,
  introspection: true,
  playground: true,
  debug: true
})

server.applyMiddleware({ app, path: '/', cors: false});

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀 Server ready at localhost:${port}`);
});
