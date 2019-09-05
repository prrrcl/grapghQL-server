import mongoose from 'mongoose'
import { Cliente, Clientes } from './db'
import { rejects } from 'assert';

export const resolvers = {
  Query : {
    getCliente :  (root, {id}) => {
      return new Promise ((res,obj) => {
        Clientes.findById(id, (err,client) => {
          err ? rejects(err) : res(client)
        })
      })
    },
    getClientes : (root, {limit}) => {
      return Clientes.find().limit(limit)
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

      return new Promise((res,obj) => {
        nuevoCliente.save((err)=> {
          err ? rejects(err) : res(nuevoCliente)
        })
      })

      // const id = require('crypto').randomBytes(10).toString('hex');
     
    },

    actualizarCliente : (root,{ input }) => {
      return new Promise((res,obj)=>{
        Clientes.findOneAndUpdate({_id: input.id} , input, {new: true}, (err,cliente) =>{
          err ? rejects(err) : res(cliente)
         })
      })
    },

    eliminarCliente : (root, { id }) => {
      return new Promise ( (res,obj) =>{
        Clientes.findOneAndRemove({_id: id}, err => {
          err ? rejects(err) : res("Se eliminó correctamente.")
        })
      })
    }


  }
}
