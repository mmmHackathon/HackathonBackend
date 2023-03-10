const express = require('express');
const app = express();

const test = require('./routes/test.routes')
const checkServer = require('./routes/checkServer.routes')
const user = require("./routes/user.routes")
const trail = require("./routes/trail.routes")
const project = require("./routes/project.routes")
const email = require("./routes/email.routes")
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(test)
app.use(checkServer)
app.use(user)
app.use(trail)
app.use(project)
app.use(email)

app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
  });

module.exports = app;