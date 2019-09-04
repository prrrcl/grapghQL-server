import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql'
import schema from './schema'


const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})


// resolver

const root = {
  cliente: () => {
    return {
      "id" : 2132312312321454546554,
      "name" : "Pepe",
      "surname" : "Palotes",
      "company" : "Ementh",
      "email" : "a@a.com"
    }
  }
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