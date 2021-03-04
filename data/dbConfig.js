const knex = require("knex");
//creating instance of knex - to configure db from the knexfile setup
const config = require("../knexfile.js");

const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);