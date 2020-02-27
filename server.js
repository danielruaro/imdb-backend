
const express = require('express')
const cors = require('cors')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const server = express()

const router = require('./src/routes/routes')

server.use(cors())
server.use(router)

server.listen(process.env.PORT, () => {
    console.log(`Running at port ${process.env.PORT}`);
});
