import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import resolvers from './resolvers'

const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})


app.use('/graphql', graphqlHTTP({
  // pasamos el schema
  schema,
  // el resolver se pasa como rootValue
  rootValue: resolvers,
  // utilizar graphiql
  graphiql: true
}))

app.listen(5000, ()=> console.log('Server On'))