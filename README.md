# Welcome to CookBook API
:coffee:  https://documenter.getpostman.com/view/13176511/TWDditfA

## Register New User
### POST "api/auth/register"
:coffee: Register new User :

:green_apple: Sample request and response

    request
    {
    "username":"helloworld!",
    "password":"password"
    }

    response
    {
    "message": "register success",
    "newUser": {
        "id": 11,
        "username": "helloworld!",
        "password": "$2a$08$ddyOrMqH8a9OxF8wRKnIOucQ1G.63hd1BEk.Mlk6XCKF3bc.X24dO"
    }
    }


## Login User
### POST "api/auth/login"

:coffee: Login a registered User

:green_apple: Sample request and response

    request
    {
    "username":"helloworld",
    "password":"sjdhfaoi8"
    }

    response
    {
    "message": "Welcome,helloworld!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImhlbGxvd29ybGQiLCJpYXQiOjE2MTQyMDcxMzMsImV4cCI6MTYxNDIxMDczM30.gbQUGoqi8iOAxXr4RKR6otopc6fLF__hm_4HSajPh1E"
    }

## Get Recipes of the User
### GET "/api/recipes/"
RESTRICTED ROUTE

:coffee: Get Recipes of the user
 
:pencil: Notes: Only Registered User with valid login token can access this route.Displays the recipes of the logged in User

:green_apple: Sample request and response

    request:
        headers:{authorization: "Bearer <TOKEN>"}

    response:
    [
    {
        "id": 1,
        "user_id": 1,
        "title": "French Bread",
        "source": "Grand Ma",
        "category": "Breakfast",
        "description": "Classic favorite",
        "photo": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnJlYWQlMjB0b2FzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 2,
        "user_id": 1,
        "title": "Chocolate Muffin",
        "source": "Grand Ma",
        "category": "Breakfast",
        "description": "Special Dark Chocolate",
        "photo": "https://images.unsplash.com/photo-1604882406195-d94d4888567d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwbXVmZmlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
    ]
## Add Recipes 
### POST "/api/recipes/"
RESTRICTED ROUTE

:coffee: Add recipes for the logged User

:pencil: Only Registered User with valid login token can access this route.Adds the recipes for the logged user

:green_apple: Sample request and response

    headers:{authorization: "Bearer <TOKEN>"}

    request:
     {
        "title":"Chicken Kabab",
        "source":"Mrs.Ky",
        "category":"Dinner",
        "description":"Indian Classic",
        "photo":"https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}

    response:
    {
        "id": 5,
        "user_id": 3,
        "title": "Chicken Kabab",
        "source": "Mrs.Ky",
        "category": "Dinner",
        "description": "Indian Classic",
        "photo": "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }

## Edit Recipe of the User
### PUT "/api/recipes/5"

:coffee: Edit the recipe with the recipe ID (of that user)

RESTRICTED ROUTE
:pencil: Only Registered User with valid login token can access this route.

:green_apple: Sample request and response
    
    headers: {authorization: "Bearer <TOKEN>"}
    
    request body
     {
        "title":"Chicken Kabab",
        "source":"Mrs.Ky",
        "category":"Dinner",
        "description":"Indian Classic!!",
        "photo":"https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }

    response
    {
    "id": 5,
    "user_id": 3,
    "title": "Chicken Kabab",
    "source": "Mrs.Ky",
    "category": "Dinner",
    "description": "Indian Classic!!",
    "photo": "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }

## Delete Recipe of the User
### DELETE "/api/recipes/8"
RESTRICTED ROUTE

:coffee: Edit the recipe with the recipe ID (of that user)

:pencil: Only Registered User with valid login token can access this route.
Deletes the recipe with the recipe ID (of that user)

:green_apple: Sample response

    response
    {
    "message": "delete success"
    }

## Ingredient Get the Ingredients for the Recipe Id
### GET "/api/ingredients/3"

:coffee: Gets the ingredients for the recipe Id.

:pencil: RESTRICTED ROUTE
Notes: Only Registered User with valid login token can access this route.

:green_apple: Sample request and response

    response:
    [
        {
        "ingredient_id": 17,
        "ingredient_name": "strawberry",
        "recipe_title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast",
        "recipe_id": 5
        },
        {
        "ingredient_id": 18,
        "ingredient_name": "almond flour",
        "recipe_title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast",
        "recipe_id": 5
        }
    ]


## Add Ingredient to the Recipe - pass recipeId
### POST  "/api/ingredients/5"

:coffee: Adds the ingredients to the recipe Id.

:pencil:  RESTRICTED ROUTE, Only Registered User with valid login token can access this route.

:green_apple: Sample request and response

    request:
    {
    "ingredient":"almond flour"
    }

    response:
    {
    "recipe":
    {
        "recipe_name": "Strawberry cake",
        "recipe_id": 5
    },
    "ingredients":
     [
        {
            "ingredient": "strawberry"
        },
        {
            "ingredient": "almond flour"
        }
    ]
    }

## Deletes Ingredient to the Recipe
### DELETE  "/api/ingredients/5/18"
:coffee: Adds the ingredients to the recipe Id.

"/api/ingredients/recipeID/ingredientID"

RESTRICTED ROUTE
:pencil:  Only Registered User with valid login token can access this route.

:green_apple: Sample response

    response:
    {
    "message": "delete success"
    }

## Edit Ingredient of the Recipe - pass recipeId
### PUT  "/api/ingredients/5/21"

:coffee: Updates the ingredient
 
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Updates the ingredient , passing the recipe ID and ingredient ID in the request params.

 
:pencil: 
    5 is the recipe ID
    21 is the ingredient Id

:green_apple: Sample request and response

    request:
        {
        "ingredient":"chopped almonds"
        }
 
    response:
        {
        "id": 5,
        "recipe_id": 5,
        "ingredient": "chopped almonds",
        "user_id": 3,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast",
        "description": "Continental"
        }

## Instruction Get the Instructions for the Recipe Id
### GET "/api/instructions/5"

:coffee: Gets the instructions for the recipe Id.

:pencil: RESTRICTED ROUTE
Notes: Only Registered User with valid login token can access this route.

:green_apple: Sample request and response

    request:
    [
    {
        "instruction_id": 1,
        "step_number": 1,
        "instruction": "Blend wheat flour with 3 eggs",
        "recipe_id": 5,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast"
    },
    {
        "instruction_id": 5,
        "step_number": 2,
        "instruction": "mix strawberries",
        "recipe_id": 5,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast"
    },
    {
        "instruction_id": 4,
        "step_number": 3,
        "instruction": "Add chopped almonds",
        "recipe_id": 5,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast"
    },
    {
        "instruction_id": 6,
        "step_number": 4,
        "instruction": "add vanila",
        "recipe_id": 5,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast"
    },
    {
        "instruction_id": 7,
        "step_number": 5,
        "instruction": "add grated pistachio",
        "recipe_id": 5,
        "title": "Strawberry cake",
        "source": "Mrs.GH",
        "category": "breakfast"
    }
    ]
     

## Add Instruction to the Recipe - pass recipeId
### POST  "/api/instructions/5"

:coffee: Adds the instructions to the recipe Id.

:pencil:  RESTRICTED ROUTE, Only Registered User with valid login token can access this route.

:green_apple: Sample request and response

    request:
    {
    "step_number":5,
    "instruction":"add pistachio"
    }

    response:
    {
    "recipe": {
        "recipe_name": "Strawberry cake",
        "recipe_id": 5
    },
    "instructions": [
        {
            "step_number": 1,
            "instruction": "Blend wheat flour with 3 eggs"
        },
        {
            "step_number": 2,
            "instruction": "mix strawberries"
        },
        {
            "step_number": 3,
            "instruction": "Add chopped almonds"
        },
        {
            "step_number": 4,
            "instruction": "add vanila"
        },
        {
            "step_number": 5,
            "instruction": "add pistachio"
        }
    ]
    }

## Deletes Instruction for the Recipe
### DELETE  "/api/instructions/5/2"
:coffee: Adds the instructions to the recipe Id.

"/api/instructions/recipeID/instructionID"

RESTRICTED ROUTE
:pencil:  Only Registered User with valid login token can access this route.

:green_apple: Sample response

    response:
    {
    "message": "delete success"
    }

## Edit Instruction of the Recipe - pass recipeId
### PUT  "/api/instructions/5/7"

:coffee: Updates the instruction step number and instruction
 
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Updates the instruciton , passing the recipe ID and instruciton ID in the request params.

 
:pencil: 
    5 is the recipe ID
    7 is the instruciton Id

:green_apple: Sample request and response

    request:
        {
            "step_number": 5,
            "instruction": "add grated pistachio"
        }
 
    response:
         {
            "id": 5,
            "recipe_id": 5,
            "step_number": 5,
            "instruction": "add grated pistachio",
            "user_id": 3,
            "title": "Strawberry cake",
            "source": "Mrs.GH",
            "category": "breakfast",
            "description": "Continental"
         }

## Get  Recipe by search query
### GET  "/api/recipes/search?title=Chocolate Muffin"

:coffee: Gets recipe by search query on title
 
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Pass the title serach parameter to get the recipe with that title.
 
:pencil: 
    search query parameter is Chocolate Muffin

:green_apple: Sample request and response

    request:
         Authorization header with Bearer Token 
 
    response:
         [
        {
            "id": 2,
            "user_id": 1,
            "title": "Chocolate Muffin",
            "source": "Grand Ma",
            "category": "Breakfast",
            "description": "Special Dark Chocolate",
            "photo": "https://picsum.photos/200/300"
        }
    ]