const Joi = require('joi');

function schemaValidarPokemon(){
    const schema = Joi.object().keys({
        name: Joi.string().min(1).max(10).required(),
        url: Joi.string().empty('')
    });
    return schema;

};

module.exports = { schemaValidarPokemon }