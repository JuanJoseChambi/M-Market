const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function Validation (input) {
    let errors = {};
    //-----------------------name
    if((input.name).length === 1) errors.name = "Name Short";
    
    if((input.name).length === 0) errors.name = "Required Name";
    //-----------------------brand
    if(!onlyLetters.test(input.brand)) errors.brand = "Only Letters";
    
    if((input.brand).length === 0) errors.brand = "Required Brand";
    //-----------------------image
    if(!onlyUlrs.test(input.image)) errors.image = "Only Urls"
    
    if((input.image).length === 0) errors.image = "Required Image";
    //-----------------------unit
    if(input.unit == 0) errors.unit = "Require Unit";
    //-----------------------price
    if(input.price == 0) errors.price = "Required Price";
    //-----------------------description
    if((input.description).length === 0) errors.description = "Required Description"
    //-----------------------category    
    if((input.category).length === 0) errors.category = "Select at least 1 Category";
    //-----------------------score
    if(input.score == 0) errors.score = "No Score";

    if((input.score).length === 0) errors.score = "Required Score"
    
    return errors
}