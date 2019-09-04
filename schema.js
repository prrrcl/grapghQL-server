import { buildSchema } from 'graphql';

const schema = buildSchema(`
  
  type Cliente {
    id: ID
    name: String
    surname: String
    company: String
    emails: [Email]
    tipo: TipoCliente
    pedidos: [Pedido]
  }
  
  type Email {
    email: String
  }
  type Pedido {
    producto: String
    precio: Int
  }
  enum TipoCliente {
    BASICO
    PREMIUM
  }
  type Query {
    getCliente(id: ID) : Cliente
  }
  input EmailInput {
    email: String
  }
  input PedidoInput{
    producto: String
    precio: Int
  }

  """ Input para crear nuevos clientes """
  input ClienteInput{
    id: ID
    name: String
    surname: String
    company: String
    emails: [EmailInput]
    tipo: TipoCliente
    pedidos: [PedidoInput]
  }

  """ Mutations para crear nuevos clientes """
  type Mutation {
    # Nombre del Resolver, input con datos y valor que retorna
    crearCliente(input: ClienteInput) : Cliente
  }


`)

export default schema