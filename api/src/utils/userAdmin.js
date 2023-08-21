const {UserAdmin, User} = require('../db')
const bcrypt = require("bcryptjs");


// let arr = [
//     {name:"jonny", lastname:"Fernandez", email:"jonny@hotmail.com", password: "code123" },
//     {name:"Matias", lastname:"Bagaso", email:"mati25@hotmail.com", password: "pepe"},
//     {name:"Andres", lastname:"Pardo", email:"apardo@gmail.com", password: "prueba"},
              
// ]
const createAdmin=async()=>{
    const adminGeneral = {name:"admin", lastname:"admin", email:"admin@gmail.com", password: "admin", admin:true}
    const passwordHash = await bcrypt.hash(adminGeneral.password, 10);

    
   
    await User.findOrCreate({
        where:{name: adminGeneral.name},
        defaults:{lastname: adminGeneral.lastname, email: adminGeneral.email, password: passwordHash, admin: true}
    });
   

}


// const AdminUser = async (name, lastname, email, password) => {

//     name = name.toUpperCase();
//     lastname = lastname.toUpperCase();
//     email = email.toLowerCase();
        
//     const passwordHash = await bcrypt.hash(password, 10);

 
//     await UserAdmin.findOrCreate({
//         where:{name: name},
//         defaults:{lastname: lastname, email: email, password: passwordHash}
//     });

    

// }


// const Admin = ()=>{

//     arr.forEach(item => {
//         AdminUser(
//             item.name, item.lastname, item.email, item.password
//         )
//       });
// }


module.exports = createAdmin