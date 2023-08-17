const {UserAdmin} = require('../db')
const bcrypt = require("bcryptjs");


let arr = [
    {name:"jonny", lastname:"Fernandez", email:"jonny@hotmail.com", password: "code123" },
    {name:"admin", lastname:"admin", email:"admin@test.com", password: "admin" },              
]


const AdminUser = async (name, lastname, email, password) => {

    name = name.toUpperCase();
    lastname = lastname.toUpperCase();
    email = email.toLowerCase();
        
    const passwordHash = await bcrypt.hash(password, 10);

 
    await UserAdmin.findOrCreate({
        where:{name: name},
        defaults:{lastname: lastname, email: email, password: passwordHash}
    });

    

}


const Admin = ()=>{

    arr.forEach(item => {
        AdminUser(
            item.name, item.lastname, item.email, item.password
        )
      });
}


module.exports = Admin