const supertest=require('supertest');
const server=require('./server');
const db=require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async ()=>{
  //close db connection after all tests
  await db.destroy()
})
 

// beforeEach(async ()=>{
//  await db.seed.run()
// })

describe("test authorization",()=>{
 
test("POST /",async ()=>{
  const testAccount={username:"moon",password:"password"}
  const res= await supertest(server).post('/api/auth/register').send(testAccount);
  expect(res.statusCode).toBe(201)
  expect(res.type).toBe("application/json")
  expect(res.body.message).toBe("register success")
  expect(res.body.newUser.username).toBe("moon")
})

test("POST / for existing account ",async ()=>{
    const testAccount={username:"moon",password:"password"}
    //create account 
    await supertest(server).post('/api/auth/register').send(testAccount);
    //register for the existing credential username "moon"
    const res= await supertest(server).post('/api/auth/register').send(testAccount);
    expect(res.statusCode).toBe(400)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("username already taken")
  })

})

test("Login / for existing account ",async ()=>{
    const testAccount={username:"moon",password:"password"}
    //create account 
    await supertest(server).post('/api/auth/register').send(testAccount);
    //login with the valid existing credential username "moon"
    const res= await supertest(server).post('/api/auth/login').send(testAccount);
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    console.log(res.body)
    expect(res.body.message).toBe(`Welcome,${testAccount.username}!`)
    expect(res.body).toHaveProperty("token");
  })

  test("Login / with invalid password",async ()=>{
    const testAccount={username:"moon",password:"password"}
    const incorrect={username:"moon",password:"password1"}
    //create account 
    await supertest(server).post('/api/auth/register').send(testAccount);
    //login with invalid credential
    const res= await supertest(server).post('/api/auth/login').send(incorrect);
    expect(res.statusCode).toBe(401)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe(`invalid credentials`)
  })

  
test("GET / to recipes router with valid login" ,async ()=>{
    const testAccount={username:"testworld1",password:"password"}
    //create account 
    await supertest(server).post('/api/auth/register').send(testAccount);
    //login with valid credential
    const res= await supertest(server).post('/api/auth/login').send(testAccount);
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    const token=res.body.token;
    //login to recipes router
    const resp= await supertest(server).get('/api/recipes/').set('Authorization',`BEARER ${token}`);
    expect(resp.statusCode).toBe(200)
    expect(resp.type).toBe("application/json")
    console.log(resp.body[0]);
    expect(JSON.stringify(resp.body)).toEqual("[]")
    })