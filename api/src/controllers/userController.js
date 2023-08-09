const { User } = require('../db')
const bcrypt = require("bcryptjs");


const createUser = async (name, lastname, email, password) => {


    name = name.toUpperCase();
    lastname = lastname.toUpperCase();
    email = email.toLowerCase();

    const userExists = await User.findOne({ where: { email } });
    if (userExists) throw new Error("El usuario ya existe");

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = {
        name,
        lastname,
        email,
        password: passwordHash,
    };
    const createdUser = await User.create(userData);

    return "Usuario creado"

}


const consultUser = async (email, password) => {
    let user = await User.findAll({where:{email}})
    let userP = user[0].password

    // console.log(userP);

    if(!user){
        return "no existe el usuario"
    }else if(user){
        const aux = bcrypt.compare(password, userP )
        return aux
    }



    

    
    
    
    



}



module.exports = { createUser, consultUser }