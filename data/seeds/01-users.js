const bcryptjs = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").insert([
    {username:"testworld",password: bcryptjs.hashSync("password",8)},
    {username:"hellozworld",password: "$2a$08$v0xBLPNERfCAVVJl5.I2l.BqxjN7B4tZjs710UVQzs9Z11hDAKiAm"},
   ])
};