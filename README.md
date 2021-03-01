# Welcome to CookBook API
https://documenter.getpostman.com/view/13176511/TWDanFVF

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


Login User
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
