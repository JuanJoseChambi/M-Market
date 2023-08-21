function validarCorreo(email, password, name, lastname) {
    const regex = /^[-\w.%+]{5,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    const regex_AZ = /^[a-zA-Z\s]{5,20}$/


    let Email = regex.test(email);
    let Password = regexp_password.test(password)
    let Name = regex_AZ.test(name)
    let Lastname = regex_AZ.test(lastname)




    if (!Name) throw new Error('Nombre debe contener 5-20 caracteres alfabético')
    if (!Lastname) throw new Error('Apellido debe contener 5-20 caracteres alfabético')
    if (!Email) throw new Error("Ingresar un mail valido");
    if (!Password) throw new Error("La contraseña debe de seguir las siguientes politicas: Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minuscula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial, 'eje: password: *Duende25 ' ")
}


function validarDeliveri(userEmail, receives) {
    const regex = /^[-\w.%+]{5,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regex_AZ = /^[a-zA-Z\s]{4,20}$/




    let NameReceives = regex_AZ.test(receives)
    let EmailUser = regex.test(userEmail);





    if (!EmailUser) return "Ingresar un mail valido para crear Delivery";
    if (!NameReceives) return 'permitidos 4-20 caracteres alfabético'
    
}




module.exports = { validarCorreo, validarDeliveri }