import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql'
import { schema } from './data/schema'

const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})


app.use('/graphql', graphqlHTTP({
  // pasamos el schema
  schema,
  // utilizar graphiql
  graphiql: true
}))

app.listen(5000, ()=> console.log('Server On'))