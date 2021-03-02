# Welcome to CookBook API
 https://documenter.getpostman.com/view/13176511/TWDditfA

## Register New User
!!!POST "api/auth/register"
Register new User :

Bodyraw (json) 
request
{"username":"helloworld!",
"password":"password"}

response
{
    "id": 4,
    "username": "helloworld!",
    "password": "$2a$08$mBmqBMwJczkF8VvhDJwK5emuCdL.DVjqcDuIBXRv505Oz51TA7YpO"
}


## Login User
POST "api/auth/login"
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
GET "/api/recipes/"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Displays the recipes of the logged in User

response:

[
    {
        "id": 1,
        "user_id": 1,
        "title": "French Bread",
        "source": "Grand Ma",
        "category": "Breakfast",
        "description": "Classic favorite"
    },
    {
        "id": 2,
        "user_id": 1,
        "title": "Chocolate Muffin",
        "source": "Grand Ma",
        "category": "Breakfast",
        "description": "Special Dark Chocolate"
    }
]

## Add Recipes 
POST "/api/recipes/"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Adds the recipes for the logged user

request:
 {"title":"Crab cake",
 "source":"Mrs.GH",
 "category":"dinner",
 "description":"Asian"}

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
PUT "/api/recipes/8"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Edit the recipe with the recipe ID (of that user)

request:
 {"title":"Lmb cury hoT and spicy!!!",
 "source":"Mrs.X",
 "category":"dinner",
 "description":"Special south asian curry"}

 response"
 {
    "id": 8,
    "user_id": 4,
    "title": "Lmb cury hoT and spicy!!!",
    "source": "Mrs.X",
    "category": "dinner",
    "description": "Special south asian curry"
}

## Delete Recipe of the User
DELETE "/api/recipes/8"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Deletes the recipe with the recipe ID (of that user)

{
    "message": "delete success"
}

## Ingredient Get the Ingredients for the Recipe Id
GET "/api/ingredients/3"
RESTRICTED ROUTE
Notes: Only Registered User with valid login token can access this route.
Gets the ingredients for the recipe Id.

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
POST  "/api/ingredients/5"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Adds the ingredients to the recipe Id.

request:
{
    "ingredient":"almond flour"
}

response:
{
    "recipe": {
        "recipe_name": "Strawberry cake",
        "recipe_id": 5
    },
    "ingredients": [
        {
            "ingredient": "strawberry"
        },
        {
            "ingredient": "almond flour"
        }
    ]
}

## Deletes Ingredient to the Recipe
DELETE  "/api/ingredients/5/18"
"/api/ingredients/<recipeID>/<ingredientID>"
RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Adds the ingredients to the recipe Id.

response:

{
    "message": "delete success"
}

## Edit Ingredient of the Recipe - pass recipeId
PUT  "/api/ingredients/5/21"

RESTRICTED ROUTE

Notes: Only Registered User with valid login token can access this route.
Updates the ingredient , passing the recipe ID and ingredient ID in the request params.

/api/ingredients/5/21
note=> 5 is the recipe ID
       21 us the ingredient Id
       
request:
{"ingredient":"chopped almonds"}

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
