const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function Validation (input) {
    let errors = {};
    //-----------------------name
    if((input.name).length === 1) errors.name = "Nombre Corto";
    
    if((input.name).length === 0) errors.name = "Nombre es Requerido";
    //-----------------------brand    
    if((input.brand).length === 0) errors.brand = "Marca es Requerido";
    //-----------------------image
    if(!onlyUlrs.test(input.image)) errors.image = "Solo Urls"
    
    //if(!input.image) errors.image = "Imagen es Requerido";
    //-----------------------unit
    if(input.unit == 0) errors.unit = "Unidades es Requerido";
    //-----------------------price
    if(input.price == 0) errors.price = "Precio es Requerido";
    //-----------------------description
    if((input.description).length === 0) errors.description = "Descripcion es Requerida"
    //-----------------------category    
    if(input.category.length === 0) errors.category = "Selecionar al menos 1 Categoria";
    //-----------------------score
    if(input.score === 0) errors.score = "Sin Puntuacion"
    
    return errors
}