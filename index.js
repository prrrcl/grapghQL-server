import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql'
import schema from './schema'


const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})

class Cliente {
  constructor(id, { name, surname, company, email }){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.company = company;
    this.email = email;
  }
}

const DB = {}

// resolver
const root = {
  cliente: () => {
    return {
      "id" : 2132312312321454546554,
      "name" : "Pepe",
      "surname" : "Palotes",
      "company" : "Ementh",
      "emails" : "a@a.com"
    }},
    crearCliente : ( { input } ) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        DB[id] = input;
        return new Cliente(id, input)
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