//validation
const Joi = require('@hapi/joi');


//schema for  validation

//register validation
const registerValidation = (data) =>{

    const schema =Joi.object().keys({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    
    });
    return schema.validate(data);

};

//login vallidation
const loginValidation = (data) =>{

    const schema =Joi.object().keys({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    
    });
    return schema.validate(data);

};



module.exports.registerValidation =registerValidation;
module.exports.loginValidation =loginValidation;

