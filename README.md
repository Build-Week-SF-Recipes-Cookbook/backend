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
    "id": 4,
    "username": "helloworld!",
    "password": "$2a$08$mBmqBMwJczkF8VvhDJwK5emuCdL.DVjqcDuIBXRv505Oz51TA7YpO"
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

    response:
    [
        {
        "id": 2,
        "user_id": 3,
        "title": "Chocolate Cup Cake",
        "source": "Star Family",
        "category": "Dessert",
        "description": "Yum dessert"
        },
        {
        "id": 3,
        "user_id": 3,
        "title": "muffin",
        "source": "spacex",
        "category": "dessert",
        "description": "add on"
         }
    ]
 
## Add Recipes 
### POST "/api/recipes/"
RESTRICTED ROUTE

:coffee: Add recipes for the logged User

:pencil: Only Registered User with valid login token can access this route.Adds the recipes for the logged user

:green_apple: Sample request and response

    request:
    {
    "title":"Thai Curry",
    "source":"Mrs.X",
    "category":"dinner",
    "description":"Special south asian curry"
    }

    response:
    {
    "id": 4,
    "user_id": 2,
    "title": "Crab cake",
    "source": "Mrs.GH",
    "category": "dinner",
    "description": "Asian"
    }

## Edit Recipe of the User
### PUT "/api/recipes/8"

:coffee: Edit the recipe with the recipe ID (of that user)

RESTRICTED ROUTE
:pencil: Only Registered User with valid login token can access this route.

:green_apple: Sample request and response

    request
    {
    "title":"Lmb cury hoT and spicy!!!",
    "source":"Mrs.X",
    "category":"dinner",
    "description":"Special south asian curry"
    }

    response
    {
    "id": 8,
    "user_id": 4,
    "title": "Lmb cury hoT and spicy!!!",
    "source": "Mrs.X",
    "category": "dinner",
    "description": "Special south asian curry"
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