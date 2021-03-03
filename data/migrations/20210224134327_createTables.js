
exports.up = async function(knex) {
  //users table  
  await knex.schema.createTable("users",(table)=>{
      table.increments()
      table.string("username",128).unique().notNullable();
      table.string("password",128).notNullable();
  })
  //recipes table
  await knex.schema.createTable("recipes",(table)=>{
    table.increments()
    table.integer("user_id").notNullable().unsigned()
         .references("users.id")
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    table.string("title",1200).unique().notNullable();
    table.string("source",1200).notNullable();
    table.string("category",1200).notNullable();
    table.string("description",1200);
    table.string("photo");
  })
  //instructions table
  await knex.schema.createTable("instructions",(table)=>{
    table.increments()
    table.integer("recipe_id").notNullable().unsigned()
         .references("recipes.id")
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    table.integer("step_number").unsigned().notNullable();
    table.string("instruction").notNullable();
})
  //ingredients
  await knex.schema.createTable("ingredients",(table)=>{
      table.increments();
      table.integer("recipe_id").notNull()
           .unsigned()
           .references("recipes.id")
           .onDelete("CASCADE")
           .onUpdate("CASCADE")
      table.string("ingredient",128).notNull();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("recipes")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("ingredients")
};
