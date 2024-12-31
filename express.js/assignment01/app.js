const express = require('express');

const app = express();

// Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response∂
// app.use((req, res, next) => {
//     console.log("Here is a middleware!");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Here is another middleware!");
//     res.send("<h1>Express.js assignment 01 (: </h1>");
// });

// Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send dummy response)
app.use('/users', (req, res, next) => {
    res.send('<h1>The "Users" page (:</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>Working on Express.js assignment 01! (:</h1>')
});

app.listen(3000);