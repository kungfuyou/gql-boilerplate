const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_SECRET } = process.env;

const resolvers = {
  Query: {
    me: async (_, args, { dataSources, user }) => {
      if (!user) {
        throw new AuthenticationError("Unathenticated");
      }

      return await dataSources.User.findByPk(user.id)
    },
    user: async (root, { id }, { dataSources }) => {
      return  dataSources.User.findByPk(id)
    },
    allUsers: async (root, args, { dataSources, user }) => {
     
        if (user?.id) {
          return dataSources.User.findAll()
        }
       
        return new AuthenticationError('allUsers Not Authorised')
      
    }
  },
  Mutation: {
    login: async (_, { email, password }, { dataSources, res }) => {

      return await dataSources.User.findOne({ where: { email }})
      .then((user) => {
        if (!user) {
          throw new AuthenticationError('Unknown user / Bad credentials')
        }

        return {
          user: user, 
          valid: bcrypt.compare(password, user.password)
        }
      })
      .then(({user, valid}) => {
        if (!valid) {
          throw new AuthenticationError('Unknown user / Bad credentials')
        }

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email
          },
          process.env.JWT_SECRET, 
          { expiresIn: '1d' }
        );

        res.cookie('jwt', token, {
          httpOny: true,
          maxAge: 600000
          //secure: true
          //domain: 'mydomain.com'
        })

        return { user, token }
      })
      .catch((error) => {
        throw new AuthenticationError(error);
      })
    },
    logout: async (_, __, {res}) => {
      res.clearCookie('jwt');
      return true;
    }
  },
  MutationResponse: {
    __resolveType(mutationResponse, context, info) {
      return null;
    },
  }
}

module.exports = resolvers;
