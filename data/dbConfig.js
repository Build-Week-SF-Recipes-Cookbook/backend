const environment = process.env.NODE_ENV || "development";
//creating instance of knex - to configure db from the knexfile setup
const knex=require('knex');

const knexfile=require('../knexfile');
 
const dbconfig=knex(knexfile[environment]);

module.exports= dbconfig;