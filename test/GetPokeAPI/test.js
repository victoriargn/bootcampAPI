require("dotenv").config();
//require("dotenv").config({path: '../../.env'});
console.log("Minha variável de ambiente: ", process.env.BASE_URL);

const request = require("supertest");
const {expect} = require("chai");
//const {schemaValidarPokemon} = require("../schema");
//const Joi = require('joi');

const BASE_URL = process.env.BASE_URL || 'localhost:8080';

describe('GET Poke/API', () => {

    it('Buscar com sucesso Pokemon Eevee pela espécie - status 200', async () => {
        const response = await request(BASE_URL)
        .get('/pokemon-species/133/')
        .set('Accept', 'application/json')

        console.log(response.status);
        expect(response.body.name).to.equal("eevee");
        expect(response.status).to.equal(200);
    });

    





});