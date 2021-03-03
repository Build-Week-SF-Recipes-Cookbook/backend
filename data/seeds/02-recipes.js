
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {user_id:1,title:"French Bread",source:"Grand Ma",category:"Breakfast","description":"Classic favorite","photo":"https://picsum.photos/200/300"},
    {user_id:1,title:"Chocolate Muffin",source:"Grand Ma",category:"Breakfast","description":"Special Dark Chocolate",photo:"https://images.unsplash.com/photo-1604882406195-d94d4888567d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwbXVmZmlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
    {user_id:2,title:"Chicken Tikka Masala",source:"Grand Pa",category:"Lunch",description:"Special Indian Flavor",photo:"https://picsum.photos/200/300"},
    {user_id:2,title:"Lamb Biriyani",source:"Grand Ma",category:"Dinner","description":"Classic Feast",photo:"https://picsum.photos/200/300"},
   ])
};