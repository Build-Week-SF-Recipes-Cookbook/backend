const bcryptjs = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").insert([
    {username:"test",password: bcryptjs.hashSync("password",8)},
    {username:"helloz",password: "$2a$08$v0xBLPNERfCAVVJl5.I2l.BqxjN7B4tZjs710UVQzs9Z11hDAKiAm"},
   ])
};