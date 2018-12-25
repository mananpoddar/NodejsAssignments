let express = require('express')
let app = express()

app.set('view engine','pug')

app.set('views','./views')
app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/stars',(req,res)=>{
  console.log('manan')
  res.render('stars')
})

app.get('/idiots',(req,res)=>{
  res.render('idiots')
})

app.listen(3000,()=>{
    console.log("server is running at 3000..")
})