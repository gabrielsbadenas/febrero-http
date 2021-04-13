const express = require('express'),
router = require('./controladores/ArticuloRouter'),
options = require('./config/options'),
app=express()

app.use('/', router)

app.listen(options.url.port, options.url.ip, () => {
  console.log(`Server running at http://${options.url.ip}:${options.url.port}/`)
})
