
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