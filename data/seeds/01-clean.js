
exports.seed = async function(knex) {
    //remember to those tables with dependencies first!
    await knex("recipes").truncate()
    await knex("ingredients").truncate()
    await knex("instructions").truncate()
    await knex("users").truncate()
};
