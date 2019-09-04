import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql'
import schema from './schema'


const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})


// resolver query

const root = {
  hola: () => 'hola mundo desde GraphQL'
}

app.use('/graphql', graphqlHTTP({
  // pasamos el schema
  schema,
  // el resolver se pasa como rootValue
  rootValue: root,
  // utilizar graphiql
  graphiql: true
}))

app.listen(5000, ()=> console.log('Server On'))