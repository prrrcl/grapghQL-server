import mongoose, { connect } from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/clients', {useNewUrlParser: true, useFindAndModify: false})

// Definimos el schema de Clientes

const clientesSchema = new mongoose.Schema({
  name: String,
  surname: String,
  company: String,
  emails: Array, 
  tipo: String,
  pedidos: Array
})
const Clientes = mongoose.model('clientes', clientesSchema)

export { Clientes }