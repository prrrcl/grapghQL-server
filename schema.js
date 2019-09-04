import { buildSchema } from 'graphql';

const schema = buildSchema(`
  
  type Cliente {
    id: ID
    name: String
    surname: String
    company: String
    emails: String
  }
  type Query {
    cliente: Cliente
  }
  input ClienteInput{
    id: ID
    name: String
    surname: String
    company: String
    emails: String
  }
  type Mutation {
    crearCliente(input: ClienteInput) : Cliente
  }


`)

export default schema