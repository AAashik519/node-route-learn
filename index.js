const express = require('express')
const app = express()
const morgan= require('morgan')
const  PORT =process.env.PORT || 8080
const contactRoute = require('./contactRoute')
// app.use(morgan('dev'))

 
 



app.use('/contacts',contactRoute )
 
 app.get('*',(req,res) =>{
     res.send('<h1>use correct route </h1>')
 })

app.listen(PORT, () => {
  console.log(`learn node js://localhost:${PORT}`)
})