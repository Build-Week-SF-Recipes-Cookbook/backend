
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {user_id:1,title:"French Bread",source:"Grand Ma",category:"Breakfast","description":"Classic favorite"},
    {user_id:1,title:"Chocolate Muffin",source:"Grand Ma",category:"Breakfast","description":"Special Dark Chocolate"},
    {user_id:2,title:"Chicken Tikka Masala",source:"Grand Pa",category:"Lunch",description:"Special Indian Flavor"},
    {user_id:2,title:"Lamb Biriyani",source:"Grand Ma",category:"Dinner","description":"Classic Feast"},
   ])
};