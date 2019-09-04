
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

const DB = {}

// resolver
const resolvers = {
  getCliente :  ({id}) => {
    return new Cliente(id, DB[id])
  },
    crearCliente : ( { input } ) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        DB[id] = input;
        return new Cliente(id, input)
    }
}
export default resolvers;