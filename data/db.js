import mongoose, { connect } from 'mongoose'
import bcrypt from 'bcrypt'
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

const userSchema = new mongoose.Schema({
  user: String,
  password: String
})
userSchema.pre('save', function(next){
  if(!this.isModified('password')){
    return next()
  }
  bcrypt.genSalt(10,(err,salt)=> {
    if(err) return next(err)
    bcrypt.hash(this.password, salt, (err,hash)=>{
      if(err) return next(err)
      this.password = hash
      next()
    })
  })
})
const User = mongoose.model('user', userSchema)
export { Clientes, User }