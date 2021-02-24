# Welcome to CookBook API

Register new User :

POST "/auth/register"
    request
    {"username":"helloworld",
    "password":"sjdhfaoi8"}

    response
    {
    "id": 3,
    "username": "helloworld",
    "password": "$2a$08$cXYeyrZQ1yNQphIL34aDJet1MLy5fjXZ8YaVH6DN9h0pKkoW2Da.2"
    }

Register new User :

Login User
POST "/auth/login"
    request
    {"username":"helloworld",
    "password":"sjdhfaoi8"}

    response
    {
    "message": "Welcome,helloworld!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImhlbGxvd29ybGQiLCJpYXQiOjE2MTQyMDcxMzMsImV4cCI6MTYxNDIxMDczM30.gbQUGoqi8iOAxXr4RKR6otopc6fLF__hm_4HSajPh1E"
    }
