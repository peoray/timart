const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const cors = require('cors')
require('dotenv').config()

const app = express()

// types
const typeDefs = require('./schemas/index')
const resolvers = require('./resolvers')

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    //   context,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  })

  await server.start()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/graphql', expressMiddleware(server))

  app.get('/', (req, res) => {
    console.log(res.send)
    res.send('Hello World!!!')
  })

  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`🚀 API Server ready at http://localhost:${port}`)
    console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
  })
}

startApolloServer()
