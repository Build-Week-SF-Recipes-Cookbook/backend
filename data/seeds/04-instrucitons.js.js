exports.seed = async function(knex) {
  await knex("instructions").insert([
    {recipe_id:1,step_number:1,instruction:"Beat 4 eggs to fluffy"},
    {recipe_id:1,step_number:2,instruction:"Blend with 1cup whole wheat flour"},
    {recipe_id:1,step_number:3,instruction:"Add 2 tbs of butter"},
    {recipe_id:1,step_number:4,instruction:"Add a dash of vanilla"},
    {recipe_id:2,step_number:1,instruction:"Beat 2 eggs to fluffy"},
    {recipe_id:2,step_number:2,instruction:"Blend with 1cup Chocolate and cocoa powder"},
    {recipe_id:2,step_number:3,instruction:"Add  3tbs of butter"},
    {recipe_id:2,step_number:4,instruction:"Add a dash of vanilla"},
   ])
};