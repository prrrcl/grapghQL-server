import mongoose from 'mongoose'
import { Cliente } from './db'

class Cliente {
  constructor(id, { name, surname, company, emails,tipo, pedidos }){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.company = company;
    this.emails = emails;
    this.tipo = tipo;
    this.pedidos =pedidos;
  }
}

export const resolvers = {
  Query : {
    getCliente :  ({id}) => {
      return new Cliente(id, DB[id])
    },
  },
  Mutation: {
    crearCliente : (root, { input } ) => {
      
      // const id = require('crypto').randomBytes(10).toString('hex');
      DB[id] = input;
      return new Cliente(id, input)
    }
  }
}
