const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function Validation (input) {
    let errors = {};
    //-----------------------name

    if((input.name).length > 50) errors.name = "Name Large";

    if((input.name).length === 1) errors.name = "Name Short";
    
    if((input.name).length === 0) errors.name = "Required Name";
    //-----------------------brand
    if(!onlyLetters.test(input.brand)) errors.brand = "Only Letters";
    
    if((input.brand).length === 0) errors.brand = "Required Brand";
    //-----------------------image
    if(!onlyUlrs.test(input.image)) errors.image = "Only Urls"
    
    if((input.image).length === 0) errors.image = "Required Image";
    //-----------------------unit
    if(!onlyLetters.test(input.unit)) errors.unit = "Only Letters";
    
    if((input.unit).length === 0) errors.unit = "Required Unit";
    //-----------------------price
    if(input.price == 0) errors.price = "Required Price";
    //-----------------------price Regular
    if(input.priceRegular == 0) errors.priceRegular = "Required Price Regular";
    //-----------------------description
    if((input.description).length === 0) errors.description = "Required Description"
    //-----------------------sku
    if(input.sku === 0) errors.sku = "Required Sku"
    //-----------------------category
    if(!onlyLetters.test(input.category)) errors.category = "Only Letters"
    
    if((input.category).length === 0) errors.category = "Required Category"
    //-----------------------sub category
    if(!onlyLetters.test(input.subcategory)) errors.subcategory = "Only Letters"
    
    if((input.subcategory).length === 0) errors.subcategory = "Required Category"
    //-----------------------score

    //-----------------------discount
    if(input.discount === 0) errors.discount = "No Discount";
    
    if(input.discount > 100) errors.discount = "Discount Max";
    
    if((input.discount).length === 0) errors.discount = "Required Discount"

    return errors
}