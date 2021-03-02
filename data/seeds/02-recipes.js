
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {user_id:1,title:"French Bread",source:"Grand Ma",category:"Breakfast","description":"Classic favorite","photo":"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnJlYWQlMjB0b2FzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
    {user_id:1,title:"Chocolate Muffin",source:"Grand Ma",category:"Breakfast","description":"Special Dark Chocolate",photo:"https://images.unsplash.com/photo-1604882406195-d94d4888567d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwbXVmZmlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
    {user_id:2,title:"Chicken Tikka Masala",source:"Grand Pa",category:"Lunch",description:"Special Indian Flavor",photo:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2724&q=80"},
    {user_id:2,title:"Lamb Biriyani",source:"Grand Ma",category:"Dinner","description":"Classic Feast",photo:"https://st.depositphotos.com/3147737/4947/i/600/depositphotos_49471133-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"},
   ])
};