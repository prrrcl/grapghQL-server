import mongoose from 'mongoose'
import { Cliente, Clientes } from './db'
import { rejects } from 'assert';

export const resolvers = {
  Query : {
    getCliente :  ({id}) => {
      return new Cliente(id, DB[id])
    },
  },
  Mutation: {
    crearCliente : (root, { input } ) => {
      const nuevoCliente = new Clientes({
        name : input.name,
        surname : input.surname,
        company : input.company,
        emails : input.emails,
        tipo : input.tipo,
        pedidos : input.pedidos
      });
      
      nuevoCliente.id = nuevoCliente._id;

      return new Promise((res,obj) => nuevoCliente.save((err)=> err ? rejects(err) : res(nuevoCliente)))

      // const id = require('crypto').randomBytes(10).toString('hex');
     
    }
  }
}
