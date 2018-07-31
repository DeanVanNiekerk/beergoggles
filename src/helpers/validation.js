
/*
NOTE: errors arrive in the below format
{
    "name":[
        "This field may not be blank."
    ]
}
*/

export const getValidationMessage = function (fieldName, validationErrors) {
    if (!validationErrors)
        return "";
    
    let fieldErrors = validationErrors[fieldName.toLowerCase()];
    if(!fieldErrors)
        return ""

    return fieldErrors.join();
}

export const getValidationErrorClass = function (fieldName, validationErrors) {
    let message = getValidationMessage(fieldName, validationErrors);
    if (!message)
        return '';
    return 'is-invalid';
}


