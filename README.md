# Node.js Assignments

My solutions to assignments from the [Node.js course by Maximilian Schwarzmüller](https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=KEEPLEARNINGBR).

## The Basics

1. Spin up a Node.js-driven Server (on port 3000)
2. Handle two Routes: "/" and "/users"
   - Return some greeting text on "/"
   - Return a list of dummy users (e.g. `<ul><li>User1</li></ul>`)
3. Add a form with a "username" `<inpu>`to the "/" page and submit a POST request to "/create-user" upon a button click
4. Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console

## Express assignment01

1. Create a npm project and install Express.js (Nodemon if you want)
2. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response
3. Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send dummy response)
