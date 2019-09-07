import mongoose from 'mongoose'
import { Cliente, Clientes, User} from './db'
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
    getClientes : (root, {limit, offset}) => {
      return Clientes.find().limit(limit).skip(offset)
    },
    getTotal : (root) => {
      return new Promise ( (res,obj) => {
        Clientes.countDocuments({}, (error,count)=>{
          error ? rejects(error) : res(count);
        })
      })
    }
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
    },

    userCreate : async(root, {user, password}) => {
      const exist = await User.findOne({user})
      if(exist){
        throw new Error('El usuario ya existe')
      }else{
        await new User({
          user,
          password
        }).save();
  
        return 'Creado correctamente'
      }

    }
  }
}
