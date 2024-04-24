const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express')
const bodyParser = require('body-parser')
const { db } = require('./utils/db')
const jwt = require("jsonwebtoken")

const login = require('./routes/login')
const register = require('./routes/register')
const refreshToken = require('./routes/refreshToken')
const getProjects = require('./routes/getProjects')
const editProject = require('./routes/editProject')
const searchProject = require('./routes/searchProject')
const createProject = require('./routes/createProject')
const getUserInfo = require('./routes/getUserInfo')

const cors = require('cors');

const { isAuthenticated, isAdmin } = require('./utils/middlewares')
const { getUserByID } = require('./services/getUsers')

const app = express()
const port = process.env.SERVER_PORT || 3000
app.use(cors());
app.use(bodyParser.json({limit: '250mb', extended: true}));

app.use(
    bodyParser.urlencoded({
      limit: '250mb', extended: true
  })
)
app
// User Authentication
app.use('/register', register)
app.use('/login', login)
app.use('/refreshToken', refreshToken)
app.use('/projects', getProjects)
app.use('/edit', isAuthenticated, editProject)
app.use('/search', searchProject)
app.use('/create', isAuthenticated, createProject)
app.use('/getuser', getUserInfo)

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
`),
)