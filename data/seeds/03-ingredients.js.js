exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {recipe_id:1,ingredient:"eggs"},
    {recipe_id:1,ingredient:"whole wheat flour"},
    {recipe_id:1,ingredient:"butter"},
    {recipe_id:1,ingredient:"vanilla"},
    {recipe_id:2,ingredient:"chicken"},
    {recipe_id:2,ingredient:"onion"},
    {recipe_id:2,ingredient:"garlic"},
    {recipe_id:2,ingredient:"ginger"},
    {recipe_id:2,ingredient:"turmeric"},
    {recipe_id:2,ingredient:"red chilli powder"},
    {recipe_id:3,ingredient:"lamb pieces"},
    {recipe_id:3,ingredient:"basmathi rice"},
    {recipe_id:3,ingredient:"biriyani powder"},
    {recipe_id:3,ingredient:"onion"},
    {recipe_id:3,ingredient:"garlic"},
    {recipe_id:3,ingredient:"ginger"},
   ])
};