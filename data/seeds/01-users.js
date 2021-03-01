exports.seed = async function(knex) {
  await knex("users").insert([
    {username:"test",password: "$2a$08$56LOPrP7xMGcvPBGXOki4Oe.1Fg.6BRnP4iTbvHv0q7gtqs.lXIv6"},
    {username:"helloz",password: "$2a$08$v0xBLPNERfCAVVJl5.I2l.BqxjN7B4tZjs710UVQzs9Z11hDAKiAm"},
   ])
};