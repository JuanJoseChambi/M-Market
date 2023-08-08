// requiere bd
// const {User} =require('../db');
const  createUser= (name, lastname , email, password,user, home, phone)=>{
    console.log("estoy por crear usurio");
    return({saludo:"chao"})
  
}
const consultUser =(email, password)=>{
    console.log("estoy por consultar en la bd");
    return({saludo:"hola"});
}
module.exports = {
    createUser,
    consultUser
}
