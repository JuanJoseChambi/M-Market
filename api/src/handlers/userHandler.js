
const { createUser, consultUser, actualizar, getDataUser, getIdDataUser, createUserGoogle } = require("../controllers/userController");
const {validarCorreo} = require('../utils/validate')

const postUser = async (req, res) => {
    try {
        const { name, lastname, email, password, userGoogle } = req.body;
        if (email && userGoogle) {
            const response = await createUserGoogle(email);
            
            return res.status(200).json(response);
        }
        let validar = validarCorreo(email, password,name,lastname)
        if (validar) return res.status(400).json(validar)
        

        console.log(email, userGoogle)

        
        // Aqui debo encriptar la contraseña
        if (!name || !lastname || !email || !password) {

            return res.status(400).send("Datos incompletos")
        }
        const response = await createUser(name, lastname, email, password)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}
const getUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) { return res.status(400).send("ingrese email y password por favor") }
        const response = await consultUser(email, password);
        res.status(200).json(response)




    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const updateUserData = req.body;
    try {
        const usuarioActualizado = await actualizar(id, updateUserData)
        res.status(201).json(usuarioActualizado)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};


const getUserPurchase = async (req, res) => {
    try {
        const getAll = await getDataUser()
        res.status(201).json(getAll)

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
};

const getUserPurchaseID = async (req, res) => {
    try {
        const { id } = req.params;
        const getOneUser = await getIdDataUser(id);
        res.status(201).json(getOneUser)
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}


module.exports = {
    postUser,
    getUser,
    updateUser,
    getUserPurchase,
    getUserPurchaseID
}
