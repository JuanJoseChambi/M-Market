const { response } = require("express");
const { createUser, consultUser } = require("../controllers/userController");

const postUser = async(req, res)=>{
   const  {name, lastname , email, password,user, home, phone} =req.body;
        // consultar los nombres creados en la BD 
        // nombre, apellido, correo, contraseña, ususario, domicilio, telefono
   try {
    // Aqui debo encriptar la contraseña
    if(!name || !lastname || !email || !password || !user || !home){  return res.status(400).send("ingrese email y password por favor")}
       const response= await createUser(name, lastname , email, password,user, home, phone)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 
}
const getUser  = async(req, res)=>{
    const { email, password} = req.body;
    try { 
        if(!email || !password){  return res.status(400).send("ingrese email y password por favor")}
        const response = await consultUser(email, password);
        res.status(200).json(response)
    
         
    
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports ={
    postUser,
    getUser
}
