const { User, Purchase, UserAdmin } = require('../db')
const bcrypt = require("bcryptjs");

const { register } = require("../handlers/routerNodemailer")


const createUserGoogle= async (email)=>{
    const userExist  = await User.findOne({ where: { email } });
    if (userExist) throw new Error("El usuario ya existe");
    if (!userExist) await register(email);
    const userGoogle = {
        name: "N/A",
        lastname:"N/A",
        email: email,
        password:"N/A"
    }
    const regGoogle = await User.create(userGoogle)
 
    return regGoogle;
}


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
    let userA = await UserAdmin.findAll()
    const filterAdmin = userA.find(item=> item.email===email)
    
    if(filterAdmin){
        const aux2 = filterAdmin.password
        const adminId = filterAdmin.id
        const emcrip = await bcrypt.compare(password, aux2)
        let pass1 = { access: true, admin: true, adminId: adminId }
       
        if(!emcrip){
            throw new Error("contraseña de administrador incorrecta")
        }else{
            return pass1
        }
    }
    
    let user = await User.findAll({ where: { email } })
    let userP = user[0].password
    let userPiD = user[0].id
    
    if (!user) return "no existe el usuario"
    let pass = { access: true, admin: false ,userId: userPiD }
    const aux = await bcrypt.compare(password, userP)
    const res = aux ? pass : {access: false}

    return res

}
    
   

    
    




   







const actualizar = async (id, updateUserData) => {
    
    const userPass = updateUserData.password
    
    const passwordHash = await bcrypt.hash(userPass, 10);

    const userToUpdate = await User.findByPk(id)
    if (!userToUpdate) {
        return "Usuario no encontrado"
    }
    userToUpdate.name = updateUserData.name || userToUpdate.name
    userToUpdate.lastname = updateUserData.lastname || userToUpdate.lastname
    userToUpdate.email = updateUserData.email || userToUpdate.email
    userToUpdate.password = passwordHash || userToUpdate.password

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





module.exports = { createUser, consultUser, actualizar, getDataUser, getIdDataUser, createUserGoogle }