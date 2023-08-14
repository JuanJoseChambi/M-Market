const { User, Purchase } = require('../db')
const bcrypt = require("bcryptjs");

const { register } = require("../handlers/routerNodemailer")


const createUser = async (name, lastname, email, password) => {

    name = name.toUpperCase();
    lastname = lastname.toUpperCase();
    email = email.toLowerCase();

    const userExists = await User.findOne({ where: { email } });
    if (userExists) throw new Error("El usuario ya existe");
    if (!userExists) await register(email);
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
    let user = await User.findAll({ where: { email } })
    let userP = user[0].password
    let userPiD = user[0].id

    // console.log(userP);

    if (!user) return "no existe el usuario"

    let pass = { access: true, userId: userPiD }

    const aux = await bcrypt.compare(password, userP)
    //  console.log(aux);
   
    const res = aux ? pass : {access: false}


    return res
}



const actualizar = async (id, updateUserData) => {

    const userToUpdate = await User.findByPk(id)
    if (!userToUpdate) {
        return "Usuario no encontrado"
    }
    userToUpdate.name = updateUserData.name || userToUpdate.name
    userToUpdate.lastname = updateUserData.lastname || userToUpdate.lastname
    userToUpdate.email = updateUserData.email || userToUpdate.email
    userToUpdate.password = updateUserData.password || userToUpdate.password

    await userToUpdate.save()
    return userToUpdate
}

const getDataUser = async() => {
       

    const allUser = await User.findAll({
        include: [
            {
              model: Purchase,
              as: "Purchase",
              attributes: ["monto"],
              
              
            },
          
          ],
    })

     return allUser
};



const getIdDataUser= async(id)=>{
     let aux = await getDataUser()

     let auxFilter = aux.find(item=> item.id === id)
    
     if(!auxFilter) return "user not found"
     
     return auxFilter


}





module.exports = { createUser, consultUser, actualizar, getDataUser, getIdDataUser }